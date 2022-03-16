const lee = {name:'Lee'};
const kim = {name:'Kim'};

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

console.log(Symbol.iterator in map);

for(const entry of map){
    console.log(entry);
}

console.log([...map]);
const [a,b] = map;
console.log(a, b);