function Person(name){
    this.name = name;
}

const me = new Person('Lee');

//프로토타입으로 교체할 객체
const parent ={
    constructor:Person,
    sayHello(){
        console.log(`Hi! My name is ${this.name}`);
    }
};

//생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent;

//me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);

me.sayHello();

console.log(me.constructor === Person);
console.log(me.constructor === Object);

console.log(Person.prototype === Object.getPrototypeOf(me));