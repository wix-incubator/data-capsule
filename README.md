# data-capsule

A pluggable capsule for storing key/value data for your application.

Following plugins support is built in:
1. LocalStorage automatically managed and auto-cleaned to never exceed quota.
2. RemoteStorage can be configured simple interface to store the key/value on your server.
3. FrameStorage is a nice way to offload storage request from frame to parent window. Parent window can use LocalStorage, RemoteStorage or any other plugin you can think of.

## installation

```sh
$ npm install --save data-capsule
```

## LocalStorage

```js
import {DataCapsule, LocalStorageStrategy} from 'data-capsule';

const capsule = new DataCapsule({
  strategy: new LocalStorageStrategy(),
  namespace: 'wix'
});
await capsule.setItem('shahata', 123);
console.log(await capsule.getItem('shahata')); // logs 123
```

## FrameStorage

In host window:

```js
import {FrameStorageListener, LocalStorageStrategy} from 'data-capsule';

const listener = new FrameStorageListener(new LocalStorageStrategy());
listener.start((origin, source, token) => token === 'secret');
//...
listener.stop();
```

In frame window:

```js
import {DataCapsule, FrameStorageStrategy} from 'data-capsule';

const capsule = new DataCapsule({
  strategy: new FrameStorageStrategy(window, '*', 'secret'),
  namespace: 'wix'
});
await capsule.setItem('shahata', 123);
console.log(await capsule.getItem('shahata')); // logs 123
```
