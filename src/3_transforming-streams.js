import { interval } from 'rxjs';
import { filter, take, skip, map, startWith, scan } from 'rxjs/operators';
import { watch } from 'rxjs-watcher';

export function run() {
  const interval$ = interval(1000);

  interval$.pipe(spy('Numbers')).subscribe();

  /**
   * 1. Multiply each value by 2
   */
  // interval$.pipe(spy('Multiplied by 2')).subscribe();

  /**
   * 2. Take only even values
   */
  // interval$.pipe(spy('Even numbers')).subscribe();

  /**
   * 3. Take the first 5 values, divided by 2
   */
  // interval$.pipe(spy('First 5, divided by 2')).subscribe();

  /**
   * 4. Take the first 3 odd values
   */
  // interval$.pipe(spy('First 3 odd')).subscribe();

  /**
   * 5. Ignore the first 3 values
   */
  // interval$.pipe(spy('Ignore the first 3')).subscribe();

  /**
   * 6. Take only the second value
   */
  // interval$.pipe(spy('Second value')).subscribe();

  /**
   * 7. Calculate the sum
   */
  // interval$.pipe(spy('Sum')).subscribe();

  /**
   * 8. Calculate the average
   */
  // interval$.pipe(spy('Average')).subscribe();
}

const spy = name => watch(name, 10);
