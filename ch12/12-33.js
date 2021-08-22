//매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달 받는다.
function changeVal(primitive, obj){
    primitive +=100;
    obj.name = 'Kim';
}

//외부 상태
var num = 100;
var person={name:'Lee'};

console.log(num);
console.log(person);

//원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

console.log(num);
console.log(person);
