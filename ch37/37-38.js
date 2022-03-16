const lee = {name: 'Lee'};
const kim = {name:'Kim'};

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

map.delete(kim);
console.log(map);