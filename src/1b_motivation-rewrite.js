import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export function run() {
  const a$ = of(1, 5);
  const b$ = a$.pipe(map(x => x * 10));

  b$.subscribe(x => console.log(x));
}
