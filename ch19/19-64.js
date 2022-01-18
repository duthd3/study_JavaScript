const person = {
    name:'Lee',
    address:'Seoul',
};

for(const key in person){
    console.log(key + ':' + person[key]);
};

console.log(person.name);