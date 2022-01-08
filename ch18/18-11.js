//기명 함수 표현식
var namedFunc = function foo(){

};
console.log(namedFunc.name);

//익명 함수 표현식
//ES5:name 프로퍼티는 빈 문자열을 값으로 갖는다.
//ES6:name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
var anonymousFunc = function(){};
console.log(anonymousFunc.name);

//함수 선언문
function bar(){}
console.log(bar.name);