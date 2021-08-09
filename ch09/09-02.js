var x = 10;

//암묵적 타입 변환
//문자열  연결 연산자는 숫자 타입 x 의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + '';
console.log(typeof str, str);

console.log(typeof x, x);
//피연산자가 모두 문자열 타입이어야 하는 문맥
'10' + 2
//피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10'
//피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0 
if(1){}

console.log(5*'10');
console.log(5+'10');
var x = 0 + '';
console.log(typeof x);
0+''
-0+''
1+''
-1+''
NaN+''
Infinity+''
-Infinity+''

true+''
false+''

null+''

undefined+''

(Symbol()) + '' //typeerror:cannot convert a Symbol value to a string

({}) + ''//"[object Object]"
Math + '' //"[object Math]"
[1] + '' //""
[10,20]+'' //"10,20"
(function(){}) + '' // "function(){}"
Array + '' //"function Array(){[native code]}"
