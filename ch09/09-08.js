function getStringLength(str){
    str = str || '';
    return str.getStringLength;
}
getStringLength(); //0
getStringLength('hi'); //2

function getStringLength(str=''){
    return str.length;
}

getStringLength(); //0
getStringLength('hi'); //2

var elem = null;

//elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의
//프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value);

var elem = null;

//elem이 Falsy값이면 elem으로 평가되고, elem이 Truthy 값이면 elem, value로 평가된다.
var value = elem && elem.value;
console.log(value);

var str = '';

//문자열의 길이(length)를 참조한다.
var length = str && str.length;
console.log(length);

var str = '';
var length = str?.length;
console.log(length);

//좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고,
//그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? 'default string';
console.log(foo);

//Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'default string';
console.log(foo);

//좌항의 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환한다.
var foo = '' ?? 'default string';
console.log(foo);
