# 19.프로토타입

## 19.1 객체지향 프로그래밍
- 객체지향 프로그래밍이란 여러 개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.
- 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라 한다.
```js
//이름과 주소 속성을 갖는 객체
const person={
  name:'Lee',
  address:'Seoul',
}
```
## 19.2 상속과 프로토타입
- 상속은 객체지향 프로그래밍의 핵심 개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.
- 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.
```js
//생성자 함수
function Circle(radius){
    this.radius = radius;
}

//Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
//공유해서 사용할 수 있도록 프로토타입에 추가한다.
//프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function(){
    return Math.PI*this.radius**2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

//Circle 생성자 함수가 생성한 모든 인스터스는 부모 객체의 역할을 하는
//프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
//즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea);
console.log(circle1.getArea());
console.log(circle2.getArea());
```
- Circle 생성자 함수가 생성한 모든 인스턴스는 자신의 프로토타입, 즉 상위 객체 역할을 하는 Circle.prototype의 모든 프로퍼티와 메서드를 상속받는다.

## 19.3 프로토타입 객체
- 프로토타입 객체는 객체 간 상속을 구현하기 위해 사용된다.
- 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티를 제공한다.
- 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지고, 이 내부 슬롯의 값은 프로토타입의 참조다.
- [[Prototype]]에 저장되는 프로토타입은 객체 생성 방식에 의해 결정된다.
### 19.3.1 __proto__ 접근자 프로퍼티
- 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]]내부 슬롯에 간접적으로 접근할 수 있다.
- __proto__는 접근자 프로퍼티다.
- __proto__접근자 프로퍼티는 상속을 통해 사용된다.
- 프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다.
- 프로퍼티 검색 방향이 한쪽 방향으로만 흘러가야 한다.
- __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.
- 프로퍼티의 참조를 취득하고 싶은 경우에는 Object.getPrototypeOf 메서드를 사용하고,
- 프로토타입을 교체하고 싶은 경우에는 Object.setPrototypeOf 메서드를 사용한다.
### 19.3.2 함수 객체의 prototype 프로퍼티
- 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
### 19.3.3 프로토타입의 constructor 프로퍼티와 생성자 함수
- 모든 프로토타입은 constructor 프로퍼티를 갖는다. 이 constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다.
- 
