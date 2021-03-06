# 18.함수와 일급 객체

## 18.1일급 객체
- 1.무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
- 2.변수나 자료구조에 저장할 수 있다.
- 3.함수의 매개변수에 전달할 수 있다.
- 4.함수의 반환값으로 사용할 수 있다.
- 일급 객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이 함수의 매개변수에 전달할 수 있으며,
- 함수의 반환값으로 사용할 수도 있다는 것이다.
- 함수는 객체이지만 일반 객체와는 차이가 있다. 일반 객체는 호출할 수 없지만 함수 객체는 호출할 수 있다.
- 함수 객체는 일반 객체에는 없는 함수 고유의 프로퍼티를 소유한다.

## 18.2함수 객체의 프로퍼티
### 18.2.1 arguments 프로퍼티
- arguments 객체는 함수 호출시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다.
- 함수 외부에서 참조할 수 없다.
- arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
### 18.2.2 caller 프로퍼티
- 사용 안함.
### 18.2.3 length 프로퍼티
- 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
- arguments 객체의 length 프로퍼티는 인자의 개수를 가리키고, 함수 객체의 length 프로퍼티는 매개변수의 개수를 가리킨다.
### 18.2.4 name 프로퍼티
- 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다.
### 18.2.5 __proto__접근자 프로퍼티
- 모든 객체는[[Prototype]]이라는 내부 슬롯을 가진다.
- [[Prototype]] 내부 슬롯에도 직접 접근할 수 없으며 __proto__ 접근자 프로퍼티를 통해 간접적으로 프로토타입 객체에 접근할 수 있다.
### 18.2.6 prototype 프로퍼티
- prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다.
- 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다.
