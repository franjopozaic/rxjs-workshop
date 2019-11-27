### Transformations

#### pipe

Composing transformation functions. You can look at it as a pipeline of operations.

```javascript
const numbers$ = interval(1000);
```

#### Value transformation

Map every emitter value: _map_
Collect (buffer) emitted values until filled: _bufferCount_
Reduce: _scan_
Combine with previous emitted value: _pairwise_

#### Filtering

By value: _filter_
By order of appearance: _first_, _take_, _skip_
By comparing to previous values: _distinct_
By time passed between values: _debounceTime_
