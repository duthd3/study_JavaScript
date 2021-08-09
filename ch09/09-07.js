//논리합(||) 연산자
'Cat' || 'Dog' // "Cat"
false || 'Dog' //"Dog"
'Cat' || false //"Cat"

//논리곱(&&) 연산자
'Cat' && 'Dog' //"Dog"
false && 'Dog' //false
'Cat' && false //false

var done = true;
var message = '';

//주어진 조건이 true일 때
if(done) message = '완료';

//if문은 단축 평가로 대체 가능하다.
//done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message);

var done = false;
var message = '';

//주어진 조건이 false일 때
if(!done) message = '미완료';

message = done || '미완료';
console.log(message);

var done = true;
var message = '';

//if...else문
if(done) message = '완료';
else message = '미완료';
console.log(message); //완료

//if...else문은 삼항 조건 연산자로 대체 가능하다.
message = done?'완료':'미완료';
console.log(message);
