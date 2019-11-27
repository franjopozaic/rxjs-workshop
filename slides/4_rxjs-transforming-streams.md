### Transformations

#### pipe

A function where you declare a _pipeline_ of operations that are performed on a stream. Think of it as an assembly line - every emitted value goes through the pipeline.

```javascript
const pipeline = pipe(
    startWith(1),
    map(x => x + 1),
    filter(x => x % 2 == 0),
    take(2)
)
```

#### Value transformation

Map every emitter value: [map](https://rxjs-dev.firebaseapp.com/api/operators/map)  
Reduce: [scan](https://rxjs-dev.firebaseapp.com/api/operators/scan)

#### Filtering

By value: [filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)  
By order of appearance: [first](https://rxjs-dev.firebaseapp.com/api/operators/first), [take](https://rxjs-dev.firebaseapp.com/api/operators/take), [skip](https://rxjs-dev.firebaseapp.com/api/operators/skip)  
By comparing to previous values: [distinct](https://rxjs-dev.firebaseapp.com/api/operators/distinct)  
By time passed between values: [debounceTime](https://rxjs-dev.firebaseapp.com/api/operators/debounceTime)
