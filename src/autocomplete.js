import { fromEvent, of } from 'rxjs';
import { debounceTime, switchMap, tap, map, delay } from 'rxjs/operators';
import { watch } from 'rxjs-watcher';
import { countries } from './countries';

/**
 * Autocomplete asynchronous
 */

const watchInterval = 10; //seconds

export function runAutocompleteExample() {
  const inputEl = createInputElement();
  createResultContainer();
  createLoadingContainer();

  fromEvent(inputEl, 'input')
    .pipe(
      map(x => x.target.value),
      watch('Input events - every keypress is an event', watchInterval),
      debounceTime(500),
      watch('Debounced - events emitted in close time proximity are filtered out', watchInterval),
      tap(showLoading),
      switchMap(query => getCountries(query)),
      tap(hideLoading),
      watch('Result', watchInterval),
      map(results => results.slice(0, 5)),
      watch('Minimized result', watchInterval),
      map(([query, ...countries]) => `Result for "${query}": ${countries.join(', ')}`),
      watch('Displayed string', watchInterval)
    )
    .subscribe(x => displayResult(x));
}

function createInputElement() {
  const inputEl = document.createElement('input');
  inputEl.setAttribute('type', 'text');
  document.body.appendChild(inputEl);
  return inputEl;
}

function createResultContainer() {
  const container = document.createElement('div');
  container.id = 'result-container';
  document.body.appendChild(container);
}

function createLoadingContainer() {
  const container = document.createElement('div');
  container.id = 'loading-container';
  document.body.appendChild(container);
}

function showLoading() {
  const container = document.getElementById('loading-container');
  container.innerHTML = 'Loading...';
}

function hideLoading() {
  const container = document.getElementById('loading-container');
  container.innerHTML = '';
}

function displayResult(result) {
  const container = document.getElementById('result-container');
  container.innerHTML = result;
}

function getCountries(query) {
  const result = countries.map(x => x.name).filter(x => x.startsWith(query));
  return of([query, ...result]).pipe(delay(1000));
}
