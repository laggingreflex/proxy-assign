const assign = require('.');

const source = { a: 'a' }
const target = {}
const proxy = assign(target, source)

proxy.a = 2
source.a // => 2
console.log(source.a);
console.log(proxy.a);

proxy.b = 'b'
console.log(proxy.b);

source.c = 'c'
console.log(proxy.c);

debugger
