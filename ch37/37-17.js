const set = new Set([1,2,3]);

console.log(Symbol.iterator in set);

for(const value of set){
    console.log(value);
}

console.log([...set]);

const [a, ...rest] = set;
console.log(a, rest);