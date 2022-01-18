const Person = (function(){
    //생성자 함수
    function Person(name){
        this.name = name;
    }
    //프로토타입 메서드
    Person.prototype.sayHello = function(){
        console.log(`Hi! My name is ${this.name}`);
    };
    //생성자 함수를 반환
    return Person;
}());

const me = new Person('Lee');

me.sayHello = function(){
    console.log(`Hey! My name is ${this.name}`);
};

delete me.sayHello;
delete Person.prototype.sayHello;//프로토타입에 직접 접근하여 프로퍼티 삭제
me.sayHello();