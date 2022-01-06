const person = new Object();//빈 객체의 생성

//프로퍼티 추가
person.name = 'Lee';
person.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
};

console.log(person);
person.sayHello();