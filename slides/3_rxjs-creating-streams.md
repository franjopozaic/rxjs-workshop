---
output: pdf_document
---

## Creating streams

#### Manual, from static values - _of_ operator
[https://rxjs-dev.firebaseapp.com/api/index/function/of]

```javascript
of(1)
of('Hello world!')
of({ name: 'James' })
of([1,2,3,4])
```

_Question: what does the above code do?_

#### Manual, dynamic - using _Subject_, _BehaviorSubject_, _ReplaySubject_ 

[https://rxjs-dev.firebaseapp.com/api/index/class/Subject]

[https://rxjs-dev.firebaseapp.com/api/index/class/BehaviorSubject]

```javascript
const numbers$ = new Subject();

numbers$.next(1);
numbers$.next(2);
numbers$.next(2);

numbers$.subscribe(console.log);
```

_Question: what does the above code do?_

#### Intervallic

```javascript
const numbers$ = interval(1000)
const numbers$ = timer(3000, 1000)
```

#### From DOM events

```javascript
const click$ = fromEvent(document, 'click')
```