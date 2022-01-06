//일반 함수 정의: 함수 선언문, 함수 표현식
function foo(){

}

const bar = function(){};

const baz = {
    x:function(){},
};

//일반 함수로 정의된 함수만이 constructor다.
new foo();
new bar();

new baz.x();

//화살표 함수 정의
const arrow = () => {};

new arrow();// arrow는 non-constructor이다.

const obj ={
    x(){}
};

new obj.x();// obj.x is not a constructor
