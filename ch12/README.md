# 12.함수

## 12.1 함수란?
- 일련의 과정을 문으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.
- 매개변수, 인수, 반환값
- 함수 정의
```js
function add(x,y){
  return x+y;
}
```
- 함수 호출
```js
var result = add(2,5);
```

## 12.2 함수를 사용하는 이유
- 필요할 때 여러번 호출할 수 있다.
- 실행 시점을 개발자가 결정할 수 있고 몇번이든 재사용이 가능하다.

## 12.3 함수 리터럴
- 자바스크립트의 함수는 객체 타입의 값이다.
```js
var f = function add(x, y){
  return x+y;
}
```
- 함수 리터럴의 구성요소: 함수이름(함수 몸체 내에서만 참조가능!!), 매개변수 목록, 함수 몸체

## 12.4 함수정의
- 함수 선언문
```js
function add(x,y){
  return x+y;
}
  - 함수 선언문은 함수 리터럴과 형태가 동일하다. 단, 함수 리터럴은 함수 이름을 생략할 수 있으나 함수 선언문은 함수 이름을 생략할 수 없다.
  - 함수 이름으로 함수를 호출하는 것이 아니라, 함수객체를 가리키는 식별자를 통해서 함수를 호출한다.
  - 자바스크립트엔진이 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
```
- 함수 표현식
```js 
var add = function(x,y){
  return x+y;
}
```
  - 값의 성질을 갖는 일급 객체 이다.
  - 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.
  - 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다.
  - 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.
  - 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 때문이다.
  - 함수 선언문으로 함수를 정의하면 런타임 이전에 함수 객체가 먼저 생성된다.(함수 호이스팅)
  - 함수 표현식의 함수 리터럴은 할당문이 실행되는 시점에 평가되어 함수 객체가 된다.(함수 표현식으로 정의한 함수는 반드시 함수 표현식 이후에 참조 또는 호출해야 한다.)

- Function 생성자 함수
```js
var add = new Function('x', 'y', 'return x+y');
```

- 화살표 함수
```js
var add=(x,y) => x+y;
```
  - 화살표 함수는 항상 익명 함수로 정의한다.  


## 12.5 함수 호출
- 함수를 실행하기 위해 필요한 값을 함수 외부에서 함수 내부로 전달할 필요가 있는경우, 매개변수를 통해 인수를 전달한다.
- 인수는 값으로 평가될 수 있는 표현식이어야 한다.
- 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다.
- 매개변수의 스코프는 함수 내부다.
- 함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.
- 인수가 부족해서 인수가 할당되지 않은 매개변수의 값은 undefined다.
- 초과된 인수는 무시된다.

## 12.6 참조에 의한 전달과 외부 상태의 변경
- 매개변수로 참조에 의한 호출을 하게 되면 외부 상태가 변경 될 수 있다.

## 12.7 다양한 함수의 형태
- 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수 라고 한다.(단 한번만 호출되며 다시 호출할 수 없다.)
- 함수가 자기 자신을 호출하는 것을 재귀 호출 이라 한다.
- 재귀 함수내에서 함수 이름으로 함수를 호출 가능(함수 내부이기 때문에)
- 탈출 조건을 반드시 만들어야 한다.
- 함수 내부에 정의된 함수를 중첩함수, 내부함수라 한다.
- 중첩함수를 포함하는 함수는 외부함수라 부른다. 
- 중첩함수는 외부 함수 내부에서만 호출할 수 있다.
- 어떤 외부 상태에 의존하지도 않고 변경하지도 않는 부수효과가 없는 함수를 순수 함수라 한다.
- 외부 상태에 의존하거나 외부 상태를 변경하는, 부수효과가 있는 함수를 비순수 함수라 한다.