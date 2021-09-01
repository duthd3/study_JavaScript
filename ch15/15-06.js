let foo = 1;

{
    let foo = 2;
    let bar = 3;

}

console.log(foo);
//console.log(bar);

//런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화 되지 않았다.
//초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
console.log(foo);

let foo;
console.log(foo);

foo = 1;
console.log(foo);

//전역변수
var x = 1;
//암묵적 전역
y = 2;
//전역 함수
function foo(){}

//var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.x);
