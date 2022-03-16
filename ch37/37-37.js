const lee = { name:'Lee'};
const kim = { name:'Kim'};

const map = new Map([[lee, 'developer'],[kim,'desinger']]);

console.log(map.has(lee));
console.log(map.has(kim));
console.log(map.has('key'));