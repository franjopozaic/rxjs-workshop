### Operators

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

![](https://rxjs.dev/assets/images/marble-diagrams/map.png)

Reduce: [scan](https://rxjs-dev.firebaseapp.com/api/operators/scan)

#### Filtering

By value: 
[filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)  
![](https://rxjs.dev/assets/images/marble-diagrams/filter.png)

By order of appearance:  
[first](https://rxjs-dev.firebaseapp.com/api/operators/first)  
![](https://rxjs.dev/assets/images/marble-diagrams/first.png) 

[take](https://rxjs-dev.firebaseapp.com/api/operators/take)  
![](https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/take.png)

[skip](https://rxjs-dev.firebaseapp.com/api/operators/skip)  
![](https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/skip.png)

By comparing to previous values: 
[distinctUntilChanged](https://rxjs-dev.firebaseapp.com/api/operators/distinctUntilChanged)  
![](https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/distinctUntilChanged.png)

By time passed between new values: 
[debounceTime](https://rxjs-dev.firebaseapp.com/api/operators/debounceTime)
![](https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/debounceTime.png)
