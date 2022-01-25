const person = {
    name:'Lee',
    getName(){
        return this.name;
    }
};

const anotherPerson = {
    name:'Kim',
};

//getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

//getName 메서드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName());

//getName 메서드를 변수에 할당
const getName = person.getName;

console.log(getName());