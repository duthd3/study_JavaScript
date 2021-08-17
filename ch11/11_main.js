var str ='string';

//문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str[1]);

//원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length);
console.log(str.toUpperCase());
-----------------------------------------------------------
var str= 'string';

//문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
//하지만 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
str[0]='S'

console.log(str);
---------------------------------------------------
var score = 80;
var copy = score;

console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy);
---------------------------------------------------------
var score = 80;

var copy = score;

console.log(score, copy);
console.log(score === copy);

---------------------------------------------
var score = 80;

var copy = score;

console.log(score, copy);
console.log(score === copy);

//score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
//따라서 score 변수의 값을 변경해도  copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy);
console.log(score === copy);

---------------------------------------------------
  var person={
    name:'Lee',
}
//프로퍼티 값 갱신
person.name='Kim';

//프로퍼티 동적 생성
person.address = 'Seoul';

console.log(person);

--------------------------------------------------
const o = {
    x:{ y: 1 }
};

//얕은복사
const c1 = { ...o};
console.log(c1 === o);
console.log(c1.x=== o.x);
console.log(o);
console.log(c1);

-------------------------------------------------
var person1={
    name:'Lee'
};

var person2={
    name:'Lee',
    
};

console.log(person1 === person2); //false
console.log(person1.name === person2.name); //true

  
