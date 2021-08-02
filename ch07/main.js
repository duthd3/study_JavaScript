5*4 //산술연산자 20
// 문자열 연결 연산자
'My name is ' + 'Lee';

//할당 연산자
color = 'red';

//비교 연산자
3>5 //false

//논리 연산자
true && false // false

//타입 연산자
typeof 'Hi'; //string

var x = 1;

//++연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++;
console.log(x);
//--연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--;
console.log(x);

var x = 5, result;
//선할당 후증가
result = x++;
console.log(result, x);
console.log(result);

//선증가 후할당
result = ++x;
console.log(result, x);
//선할당 후감소
result = x--;
console.log(result, x);
//선감소 후할당
result = --x;
console.log(result, x);

var x = '1';
//문자열을 숫자로 타입 변환한다.
console.log(+x);
console.log(x);

//불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x);
console.log(x);

//문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x);
console.log(x);

//문자열 연결 연산자
'1' + 2; // '12'
1+ '2'; //'12'

//산술 연산자
1 + 2;//3

//true는 1로 타입변환된다.
1 + true; // 2

//false는 0으로 타입변환된다.
1 + false; // 1

//null은 0 으로 타입변환된다.
 1 + null; //1

//undefined는 숫자로 타입변환 되지 않는다.
+undefined; //NaN
1 + undefined; // NaN

var x;
x = 10;
console.log(x);

x+=5;
console.log(x);

x-=5;
console.log(x);
x*=5;
console.log(x);
x/=5
console.log(x);
x%=5;
console.log(x);

var str = 'My name is ';
str += 'Lee';
console.log(str);

5===5; //true
5 === '5' //false
//NaN은 자신과 일치하지 않는 유일한 값이다.
NaN===NaN; //false

isNaN(NaN); //true
isNaN(10); //false
isNaN(1+undefined); //true

0===-0;//true
0 == -0; //true
