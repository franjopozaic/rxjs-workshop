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

Transform based on all emitted values: [scan](https://rxjs-dev.firebaseapp.com/api/operators/scan)

#### Filtering

By value: 
[filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)  
![](https://rxjs.dev/assets/images/marble-diagrams/filter.png)

By order of appearance:  
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

Sampling
[sample](https://rxjs.dev/api/operators/sample)
![](https://rxjs.dev/assets/images/marble-diagrams/sample.png)

#### Combining streams

[combineLatest](https://rxjs.dev/api/index/function/combineLatest)
![](https://rxjs.dev/assets/images/marble-diagrams/combineLatest.png)

#### Higher order observable transformations

[switchMap](https://rxjs.dev/api/operators/switchMap)
![](https://rxjs.dev/assets/images/marble-diagrams/switchMap.png)

#### Time transformations

[delay](https://rxjs.dev/api/operators/delay)
![](https://rxjs.dev/assets/images/marble-diagrams/delay.png)

#### Buffering

[bufferCount](https://rxjs.dev/api/operators/bufferCount)
![](https://rxjs.dev/assets/images/marble-diagrams/bufferCount.png)


#### Perform side effects

[tap](https://rxjs.dev/api/operators/tap)