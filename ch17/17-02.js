//String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);
//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

//Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func);
console.dir(func);

//Array 생성자 함수에 의한 Array 객체 생성
const arr = new Array(1,2,3);
console.log(typeof arr);
console.log(arr);

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

const date = new Date();
console.log(typeof date);
console.log(date);