const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2,1,2,3,4,3,4]));

const uniq1 = array => [...new Set(array)];
console.log(uniq1([2,1,2,3,4,3,4]));