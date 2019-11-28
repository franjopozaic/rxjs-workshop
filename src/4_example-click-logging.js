import { watch } from 'rxjs-watcher';
import { debounceTime, map, bufferCount, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

/**
 * Click logging
 *
 * We have to know which buttons are users clicking.
 * Collect all relevant click data and send as http request.
 */

export function run() {
  const [buttonOne, buttonTwo, buttonThree] = [
    createButton('button-one', 'Action 1'),
    createButton('button-two', 'Action 2'),
    createButton('button-three', 'Action 3')
  ];

  document.body.appendChild(buttonOne);
  document.body.appendChild(buttonTwo);
  document.body.appendChild(buttonThree);
}

export function createButton(id, title) {
  const button = document.createElement('button');
  button.innerHTML = title;
  button.id = id;
  return button;
}

const spy = name => watch(name, 10);
