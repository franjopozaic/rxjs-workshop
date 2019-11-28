import { fromEvent, of } from 'rxjs';
import { debounceTime, switchMap, tap, map, delay } from 'rxjs/operators';
import { watch } from 'rxjs-watcher';
import { countries } from './countries';

/**
 * Create an input element which queries countries on the fly
 */

export function run() {
  const inputEl = createInputElement();
  createResultContainer();
  createLoadingContainer();
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

const spy = name => watch(name, 10);
