# proxy-assign

Creates [proxies][Proxy] of all existing properties of source object(s) onto a target object, without actually assigning anything onto the target.

In contrast to [Object.assign]:

> The `Object.assign()` method **[copies]** properties from a source object to a target object. **It uses `[[Get]]` on the source and `[[Set]]` on the target**.

This **doesn't copy** and uses **both** `[[Get]]` ***and*** `[[Set]]` on the **source** (for properties that exist on it).

Modifying exiting properties (even primitives) alters them on the source object. Any new properties are still set on the target.

[Proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
[Object.assign]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Description

## Install

```
npm i proxy-assign
```

## Usage

### API

```js
const target = ProxyAssign(target, ...sources)
```

### Example

```js
const ProxyAssign = require('proxy-assign')

const source = { a: 'a' }
const target = {}
const proxy = ProxyAssign(target, source)

proxy.a = 0
proxy.b = 'b'
```
```js
source: { a: 0 }
target: { b: 'b' }
proxy: Proxy { b: 'b' } // Proxy of target
```
