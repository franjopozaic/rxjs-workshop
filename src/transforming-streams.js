import { interval } from 'rxjs';
import { filter, take, skip, map, startWith, scan } from 'rxjs/operators';
import { watch } from 'rxjs-watcher';

export function run() {
  const interval$ = interval(1000);

  interval$.pipe(spy('Numbers')).subscribe();

  /**
   * 1. Multiply each value by 2
   */
  interval$
    .pipe(
      map(x => x * 2),
      spy('Multiplied by 2')
    )
    .subscribe();

  /**
   * 2. Take only even values
   */
  interval$
    .pipe(
      filter(x => x % 2 == 0),
      spy('Even numbers')
    )
    .subscribe();

  /**
   * 3. Take the first 5 values, divided by 2
   */
  interval$
    .pipe(
      take(5),
      map(x => x / 2),
      spy('First 5, divided by 2')
    )
    .subscribe();

  /**
   * 4. Take the first 3 odd values
   */
  interval$
    .pipe(
      filter(x => x % 2 == 1),
      take(3),
      spy('First 3 odd')
    )
    .subscribe();

  /**
   * 5. Ignore the first 3 values
   */
  interval$.pipe(skip(3), spy('Ignore the first 3')).subscribe();

  /**
   * 6. Take only the second value
   */
  interval$.pipe(skip(1), take(1), spy('Second value')).subscribe();

  /**
   * 7. Calculate the sum
   */
  interval$
    .pipe(
      scan((prev, next) => prev + next),
      spy('Sum')
    )
    .subscribe();

  /**
   * 8. Calculate the average
   */
  interval$
    .pipe(
      scan((prev, next) => prev + next),
      map((x, i) => x / (i == 0 ? 1 : i)),
      spy('Average')
    )
    .subscribe();
}

const spy = name => watch(name, 10);
