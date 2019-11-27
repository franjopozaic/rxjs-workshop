import {
  map,
  distinctUntilChanged,
  sample,
  startWith,
  scan,
  tap,
  publish,
  share
} from 'rxjs/operators';
import { interval, combineLatest, timer } from 'rxjs';

export function run() {
  createContainers();

  const [temp$, windSpeed$, height$] = getStreams();

  const sampleInterval$ = timer(0, 2000);

  const dashboard$ = combineLatest(temp$, windSpeed$, height$).pipe(
    distinctUntilChanged(),
    map(([temp, wind, height]) => [toFarenheit(temp), toKnots(wind), toFeet(height)]),
    sample(sampleInterval$)
  );

  const extremes$ = combineLatest(
    temp$.pipe(scan(min)),
    windSpeed$.pipe(scan(max)),
    height$.pipe(scan(max))
  ).pipe(sample(sampleInterval$));

  dashboard$.subscribe(display);
  extremes$.subscribe(displayExtremes);
}

const spy = () => tap(console.log);

function toFarenheit(t) {
  return t;
}

function toKnots(s) {
  return s;
}

function toFeet(m) {
  return m;
}

function display([temp, wind, height]) {
  const t = document.createElement('p');
  t.innerHTML = 'Temperature: ' + (temp || '');
  const w = document.createElement('p');
  w.innerHTML = 'Wind speed: ' + (wind || '');
  const h = document.createElement('p');
  h.innerHTML = 'Height: ' + (height || '');

  const container = document.getElementById('container');
  container.innerHTML = '';
  container.appendChild(t);
  container.appendChild(w);
  container.appendChild(h);
}

function displayExtremes([temp, wind, height]) {
  const t = document.createElement('p');
  t.innerHTML = 'Min temperature: ' + (temp || '');
  const w = document.createElement('p');
  w.innerHTML = 'Max wind speed: ' + (wind || '');
  const h = document.createElement('p');
  h.innerHTML = 'Max height: ' + (height || '');

  const container = document.getElementById('container-extremes');
  container.innerHTML = '';
  container.appendChild(t);
  container.appendChild(w);
  container.appendChild(h);
}

function max(currentMax, next) {
  return next > currentMax ? next : currentMax;
}

function min(currentMin, next) {
  return next < currentMin ? next : currentMin;
}

function getStreams() {
  const temp$ = interval(1000).pipe(
    map(_ => -20 + Math.random() * 10),
    map(Math.round),
    share()
  );

  const windSpeed$ = interval(3000).pipe(
    map(_ => 20 + Math.random() * 10),
    map(Math.round),
    share()
  );

  const height$ = interval(5000).pipe(
    map(_ => 10000 + Math.random() * 10),
    map(Math.round),
    share()
  );

  return [temp$, windSpeed$, height$];
}

function createContainers() {
  const container = document.createElement('div');
  container.id = 'container';
  document.body.appendChild(container);

  const containerExtremes = document.createElement('div');
  containerExtremes.id = 'container-extremes';
  document.body.appendChild(containerExtremes);
}
