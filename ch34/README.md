# 34.이터러블

## 34.1 이터레이션 프로토콜
- ES6에서 도입된 이터레이션 프로토콜은 순회 가능한 데이터 컬렉션을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.
- 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of 문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화 했다.
- 이터레이션 프로토콜에는 `이터러블 프로토콜` 과 `이터레이터 프로토콜`이 있다.
  - 이터러블 프로토콜
    - Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통하여 상속 받은 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
    - 이러한 규약을 이터러블 프로토콜이라 하며, 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다. 이터러블은 for...of 문으로 순회할 수 있으며 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
  - 이터레이터 프로토콜
    - 이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다. 이터레이터는 next 메서드를 소유하며 next 메서드를 호출하면 이터러블을 순회하며 value와 done 프로퍼티를 갖는 이터레이터 리저르 객체르 반환한다.

### 34.1.1 이터러블
- 이터러블 프로토콜
- 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다. 즉, 이터러블은 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체를 말한다.
- 일반 객체는 이터러블 프로토콜을 준수하는 이터러블이 아니다. 따라서 일반 객체는 for...of 문으로 순회할 수 없다.
- 스프레드 프로퍼티 제안은 일반 객체에 스프레드 문법의 사용을 허용한다.(제안단계)
  
### 34.1.2 이터레이터
- 이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.
- 이터레이터의 next 메서드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할을 한다.
- next 메서드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.
- 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는 객체다.
- value 프로퍼티는 현재 순회중인 이터러블의 값을 나타내며 done 프로퍼티는 이터러블의 순회 완료 여부를 나타낸다.

## 34.2 빌트인 이터러블
- Array, String, Map, Set, TypedArray, arguments, DOM 컬렉션은 빌트인 이터러블이다.

## 34.3 for...of문
- for...of 문은 이터러블을 순회하면서 이터러블의 요소를 변수에 할당한다.
```js
for(변수선언문 of 이터러블){...}
```
- for...of 문은 내부적으로 이터레이터의 next 메서드를 호출하여 이터러블을 순회하며 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값을 for...of 문의 변수에 할당한다.
- done 프로퍼티 값이 false이면 이터러블의 순회를 계속하고 true이면 이터러블의 순회를 중단한다.

## 34.4 이터러블과 유사 배열 객체
- 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다.
- 유사 배열 객체는 이터러블이 아닌 일반 객체다. 따라서 for...of 문으로 순회할 수 없다.
- Array.from 메서드는 유사 배열 객체 또는 이터러블을 인수로 전달받아 배열로 전달받아 배열로 변환하여 반환한다.

## 34.5 이터레이션 프로토콜의 필요성
- 다양한 데이터 공급자가 이터레이션 프로토콜을 준수하도록 규정하면 데이터 소비자는 이터레이션 프로토콜만 지원하도록 구현하면 된다.
- 즉, 데이터 소비자와 데이터 공급자를 연결하는 인터페이스의 역할을 한다.

## 34.6 사용자 정의 이터러블
### 34.6.1 사용자 정의 이터러블 구현
- 일반 객체도 이터레이션 프로토콜을 준수하도록 구현하면 사용자 정의 이터러블이 된다.
```js
const fibonacci = {
    //Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수한다.
    [Symbol.iterator](){
        let[pre, cur] = [0,1];
        const max = 10;

        return{
            next(){
                [pre, cur] = [cur, pre+cur];
                return {value:cur, done: cur >= max}
            }
        };
    }
};

for (const num of fibonacci){
    console.log(num);
}
```

### 34.6.2 이터러블을 생성하는 함수
```js
const fibonacciFunc = function(max){
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator](){
            return{
                next(){
                    [pre, cur] = [cur, pre+cur];
                    return{value:cur, done:cur>=max};
                }
            };
        }
    };
};

for(const num of fibonacciFunc(100)){
    console.log(num);
}
```
### 34.6.3 이터러블이면서 이터레이터인 객체를 생성하는 함수
- 이터러블이면서 이터레이터인 객체를 생성하면 Symbol.iterator 메서드를 호출하지 않아도 된다.
### 34.6.4 무한 이터러블과 지연 평가
- 지연 평가는 데이터가 필요한 시점 이전까지는 미리 데이터를 생성하지 않다가 데이터가 필요한 시점이 되면 그때야 비로소 데이터를 생성하는 기법이다.
- 지연 평가를 사용하면 불필요한 데이터를 미리 생성하지 않고 필요한 데이터를 필요한 순간에 생성하므로 빠른 실행 속도를 기대할 수 있고 불필요한 메모리를 소비하지 않으며 무한도 표현할 수 있다.



