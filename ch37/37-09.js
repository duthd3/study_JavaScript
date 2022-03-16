const set = new Set();
console.log(NaN === NaN);
console.log(0 === -0);
set.add(NaN).add(NaN);
console.log(set);
set.add(0).add(-0);
console.log(set);