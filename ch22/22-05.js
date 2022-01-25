//this는 어디서든지 참조 가능하다.
//전역에서 this는 전역 객체 window를 가리킨다.
console.log(this);

function square(number){
    //일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
    console.log(this);
    return number**2;
}

square(2);

const person={
    name:'Lee',
    getName(){
        //메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
        console.log(this.name);
        return this.name;
    }
};

console.log(person.getName());

function Person(name){
    this.name = name;
    //생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스르 가리킨다.
    console.log(this);
}

const me = new Person('Lee');
