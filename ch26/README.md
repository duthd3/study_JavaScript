# 26.ES6 함수의 추가 기능

## 26.1 함수의 구분
- ES6 이전의 모든 함수는 사용 목적에 따라 명확한 구분이 없다.

|ES6 함수의 구분|constructor|prototype|super|arguments|
|:---:|:---:|:---:|:---:|:---:|
|일반 함수|O|O|X|O|
|메서드|X|X|O|O|
|화살표 함수|X|X|X|X|

## 26.2 메서드
- ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다.
- ES6 사양에서 정의한 메서드는 인스턴스를 생성할 수 없는 non-constructor다.
- 메서드는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
- 표준 빌트인 객체가 제공하는 프로토타입 메서드와 정적 메서드는 모두 non-constructor다.
- ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯[[HomeObject]]를 갖는다.
- super 참조는 내부 슬롯[[HomeObject]]를 사용하여 수퍼클래스의 메서드를 참조하므로 내부 슬롯 [[HomeObject]]를 갖는 메서드는 super키워드를 사용할 수 있다.

## 26.3 화살표 함수

### 26.3.1 화살표 함수 정의
- 함수 정의
```js
const multiply = (x, y) => x * y;
multiply(2, 3); //6
```
- 매개변수 선언
```js
const arrow = (x, y, z,...) => {};
```
- 매개변수가 한 개인 경우 소괄호() 생략 가능.
- 매개변수가 없는 경우 소괄호() 생략 불가능.
- 함수 몸체 정의
- 화살표 함수도 즉시 실행 함수로 사용할 수 있다.

### 26.3.2 화살표 함수와 일반 함수의 차이
- 1.화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.(prototype프로퍼티가 없고 프로토타입도 생성하지 않는다.)
- 2.중복된 매개변수 이름을 선언할 수 없다.
- 3.화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.
- 즉, 화살표 함수 내부에서 this, arguments, super, new .target을 참조하면 스코프 체인을 통해 상위 스코프의 this,arguments,super,new.target을 참조한다.

### 26.3.3 this
- 화살표 함수가 일반 함수와 구별되는 가장 큰 특징은 this다.
- this 바인딩은 함수의 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
- 화살표 함수는 함수 자체의 this바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다. 이를 lexical this라 한다.
- 따라서 this를 교체 할 수 없고 언제나 상위 스코프의 this 바인딩을 참조한다.
- 화살표 함수로 메서드를 정의하는 것은 바람직 하지 않다.
- 메서드를 정의할 때는 ES6 메서드 축약 표현으로 정의한 ES6 메서드를 사용하는 것이 좋다.

### 26.3.4 super
- 화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다.
- 화살표 함수 내부에서 super를 참조하면 this와 마찬가지로 상위 스코프의 super를 참조한다.

### 26.3.5 arguments
- 화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다.
- 화살표 함수 내부에서 arguments를 참조하면 this와 마찬가지로 상위 스코프의 arguments를 참조한다.
- 상위스코프의 arguments를 참조하므로 그다지 도움이 되지 않는다.
- 화살표 함수로 가변 인자 함수를 구현해야 할 때는 반드시 Rest 파라미터를 사용해야 한다.

## 26.4 Rest 파라미터
### 26.4.1 기본 문법
- Rest 파라미터는 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한다
- Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
```js
function foo(...rest){
  console.log(rest);//[1,2,3,4,5]
}
foo(1,2,3,4,5);
```
- 일반 매개변수와 Rest 파라미터는 함께 사용할 수 있다. 이때 함수에 전달된 인수들은 매개변수와 Rest 파라미터에 순차적으로 할당된다.
- Rest 파라미터는 반드시 마지막 파라미터이어야 한다.
- 단 하나만 선언할 수 있다.

### 26.4.2 Rest 파라미터와 arguments 객체
- arguments 객체는 유사배열 객체이므로 배열 메서드를 사용하려면 arguments 객체를 배열로 변환해야 하는 번거로움이 있다.
- ES6에서는 rest 파라미터를 사용하여 가변 인자 함수의 인수 목록을 배열로 직접 전달받을 수 있다.

## 26.5 매개변수 기본값
- 인수가 전달되지 않은 매개변수의 값은 undefined다.
- 자바스크립트 엔진은 매개변수의 개수와 인수의 개수를 체크하지 않기 때문에 매개변수에 인수가 전달되지 않았을 경우 매개변수에 기본값을 할당할 필요가 있다.
- 매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효하다.