1 - '1' //0
1 * '10' //10
1 / 'one' //NaN

'1' > 0 //true

//문자열 타입
+'' //0
+'0' //0
+'1' //1
+'string' //NaN

//불리언 타입
+true // 1
+false // 0

//null타입
+null //0

console.log(+false);

//undefined타입
+undefined // NaN

//심벌타입
+Symbol() // error

//객체타입
+{} //NaN
+[] //0
+[10, 20] // NaN
+(function(){}) // NaN
if('') console.log('1');
if(true) console.log('2')
if(0) console.log('3')
if('str') console.log('4')
if(null) console.log('5')

if(!false) console.log(false + ' is falsy value');
if(!undefined) console.log(undefined + ' is falsy value');
if(!null) console.log(null + ' is falsy value');
if(!0) console.log(0 + ' is falsy value');
if(!NaN) console.log(NaN + ' is falsy value');
if(!'') console.log('' + ' is falsy value');

//전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v){
    return !v;
}
//전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v){
    return !!v;
}

console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy({}));
console.log(isTruthy([]));
