import { watch } from 'rxjs-watcher';
import { debounceTime, map, bufferCount, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

/**
 * Click logging
 */

 const watchInterval = 10 //seconds

export function run() {
  const [buttonOne, buttonTwo, buttonThree] = [
    createButton('button-one', 'Action 1'),
    createButton('button-two', 'Action 2'),
    createButton('button-three', 'Action 3')
  ];

  document.body.appendChild(buttonOne);
  document.body.appendChild(buttonTwo);
  document.body.appendChild(buttonThree);

  const click$ = fromEvent(document, 'click');

  click$
    .pipe(
      map(x => x.target.id),
      watch('All clicks', watchInterval),
      debounceTime(300),
      watch('Debounced', watchInterval),
      filter(x => x != ''),
      watch('Only with id present', watchInterval),
      bufferCount(5),
      watch('Buffer 5', watchInterval)
    )
    .subscribe(() => {
      // Call logging endpoint
    });
}

export function createButton(id, title) {
  const button = document.createElement('button');
  button.innerHTML = title;
  button.id = id;
  return button;
}

// const random$ = interval(200).pipe(
//   map(_ => Math.random()),
//   watch('Random', 10),
//   filter(x => x > 0.9),
//   watch('Filtered', 10)
// );
