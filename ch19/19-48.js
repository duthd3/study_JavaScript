function Person(name){
    this.name = name;
}

const me = new Person('Lee');

const parent = {};

Object.setPrototypeOf(me, parent);

console.log(Person.prototype === parent);
console.log(parent.constructor === Person);

Person.prototype= parent;

console.log(me instanceof Person);
console.log(me instanceof Object);