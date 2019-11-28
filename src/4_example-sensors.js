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
import { watch } from 'rxjs-watcher';

/**
 * The task is to create a dashboard on a plane that displays data from the sensors.
 * The data comes in as streams. You have to display temperature, speed and height.
 *
 * 1. Display the data on the dashboard
 * 2. Switch to farenheit, knots, feet
 * 3. Avoid often display changes, display every 5 s
 * 4. Add another dashboard, displaying only max/min values
 */

export function run() {
  createContainers();

  const [temp$, speed$, height$] = getStreams();
}

const clog = () => tap(console.log);
const spy = name => watch(name, 11);

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
  w.innerHTML = 'Speed: ' + (wind || '');
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
  w.innerHTML = 'Max speed: ' + (wind || '');
  const h = document.createElement('p');
  h.innerHTML = 'Max height: ' + (height || '');

  const container = document.getElementById('container-extremes');
  container.innerHTML = '';
  container.appendChild(t);
  container.appendChild(w);
  container.appendChild(h);
}

function getStreams() {
  const temp$ = interval(1320).pipe(
    map(_ => -20 + Math.random() * 10),
    map(Math.round),
    share(),
    spy('Temp')
  );

  const speed$ = interval(3090).pipe(
    map(_ => 500 + Math.random() * 10),
    map(Math.round),
    share(),
    spy('Speed')
  );

  const height$ = interval(4940).pipe(
    map(_ => 10000 + Math.random() * 10),
    map(Math.round),
    share(),
    spy('Height')
  );

  return [temp$, speed$, height$];
}

function createContainers() {
  const container = document.createElement('div');
  container.id = 'container';
  document.body.appendChild(container);

  const containerExtremes = document.createElement('div');
  containerExtremes.id = 'container-extremes';
  document.body.appendChild(containerExtremes);
}
