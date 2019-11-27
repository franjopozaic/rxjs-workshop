---
output: pdf_document
---

## Creating streams

#### Manual, from static values
[of](https://rxjs-dev.firebaseapp.com/api/index/function/of)

```javascript
of(1)
of('Hello world!')
of({ name: 'James' })
of([1,2,3,4])
```

#### Manual, dynamic

[Subject](https://rxjs-dev.firebaseapp.com/api/index/class/Subject)  
[BehaviorSubject](https://rxjs-dev.firebaseapp.com/api/index/class/BehaviorSubject)  
[ReplaySubject](https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject)


```javascript
const numbers$ = new Subject();

numbers$.next(1);
numbers$.next(2);
numbers$.next(2);

numbers$.subscribe(console.log);
```

#### Intervallic

[interval](https://rxjs-dev.firebaseapp.com/api/index/function/interval)  
[timer](https://rxjs-dev.firebaseapp.com/api/index/function/timer)

```javascript
const numbers$ = interval(1000)
const numbers$ = timer(3000, 1000)
```

#### From DOM events

[fromEvent](https://rxjs-dev.firebaseapp.com/api/index/function/fromEvent)

```javascript
const click$ = fromEvent(document, 'click')
```