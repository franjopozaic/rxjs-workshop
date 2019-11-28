import { of, Subject, interval, fromEvent } from 'rxjs';
import { watch } from 'rxjs-watcher';

export function run() {
  /**
   * of
   */
  of([1, 2, 3, 4, 5])
    .pipe(spy('of'))
    .subscribe();

  /**
   * Subject
   */
  const number$ = new Subject();

  number$.pipe(spy('Subject')).subscribe();
  number$.next(1);

  setTimeout(() => number$.next(2), 1000);

  /**
   * Intervallic
   */
  const interval$ = interval(1000);

  interval$.pipe(spy('Interval')).subscribe();

  /**
   * From DOM events
   */

  const click$ = fromEvent(document, 'click');

  click$.pipe(spy('Clicks')).subscribe();
}

const spy = name => watch(name, 10);
