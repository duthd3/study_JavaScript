var template = 'Template literal';
console.log(template);

var num1 = 0.1;
var num2 = 0.3;
console.log(num1+num2);
var boolean = false;
console.log(boolean);

var key = Symbol('key');
console.log(typeof key)

var obj = {};
obj[key] = 'value';
console.log(obj[key]);

var foo;
console.log(typeof foo);

foo=3;
console.log(typeof foo);

foo='Hello'
console.log(typeof foo);

foo=true;
console.log(typeof foo);

foo=null;
console.log(typeof foo);

foo=Symbol();
console.log(typeof foo);

foo={}; //객체
console.log(typeof foo);

foo=[]; //배열
console.log(typeof foo);

foo=function(){}; //함수
console.log(typeof foo);
