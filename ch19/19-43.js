function Person(name){
    this.name = name;
}

const me = new Person('Lee');

//프로토타입으로 교체할 객체
const parent = {
    sayHello(){
        console.log(`Hi! My name is ${this.name}`);
    }
};

//me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent); //=== me.__proto__ = parent;
me.sayHello();