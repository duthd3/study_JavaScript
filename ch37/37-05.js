const set = new Set([1,2,3]);

console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));

set.size = 10;
console.log(set.size);