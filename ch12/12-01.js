//f(x,y) = x+y
function add(x,y){
    return x+y;
}

//f(2,5) = 7
console.log(add(2,5));

var result = add(2,5);
console.log(result);
console.dir(add);

//기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
//함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo(){
    console.log('foo');
}

foo();

//함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
//함수 리터럴에서는 함수 이름을 생략할 수 있다.
var bar = (function bar(){console.log('bar');});
bar();

//함수 표현식
var add= function(x, y){
    return x+y;
};

console.log(add(2,5)); //7

//기명 함수 표현식
var add= function foo(x,y){
    return x+y;
};
//함수 객체를 가리키는 식별자로 호출
console.log(add(2,5));

//함수 참조
console.dir(add);
console.dir(sub);

//함수 호출
console.log(add(2,5));
console.log(sub(2,5));

//함수 선언문(선언문 보다 먼저 함수를 호출해도 ok)
function add(x,y){
    return x+y;
};

//함수 표현식(표현식 보다 먼저 함수를 호출하면 X)
var sub = function(x,y){
    return x-y;
};

var add = new Function('x','y', 'return x+y');
console.log(add(2,5));

var add1 =(function(){
    var a = 10;
    return function(x,y){
        return x+y+a;
    };
}());

console.log(add1(1,2));

var add2 = (function(){
    var  a =10;
    return new Function('x', 'y', 'return x+y+a');
}());

console.log(add2(1,2));

//화살표 함수
const add=(x,y) => x+y;
console.log(add(2,5));

function add(x, y){
    return x+y;
}

//함수 호출
//인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

function add(x,y){
    console.log(x, y);
    return x+y;
}

add(2,5);
//add 함수의 매개변수 x,y는 함수 몸체 내부에서만 참조할 수 있다.
//console.log(x,y);

function add(x,y){
    return x+y;
}

console.log(add(2));

console.log(add(2,5,10));//초과된 인수는 무시
