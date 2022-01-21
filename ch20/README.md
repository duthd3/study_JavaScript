# strict mode
## 20.1 strict mode란?
```js
function foo(){
  x = 10;
}
foo();

console.log(x);//?
```
- foo 함수 내에서 선언하지 않은 x 변수에 값 10을 할당했다. 자바스크립트 엔진은 스코프 체인을 통해 x변수가 어디에서 선언되었는지 검색하기 시작한다.
- 결국 찾지 못하고 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성한다. 마치 전역변수처럼 사용 가능하다. 이러한 현상을 암묵적 전역이라 한다.
- strict mode는 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일을킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.
## 20.2 strict mode의 적용
- strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다.
```js
'use strict';

function foo(){
  x=10; // ReferenceError
}
foo();
```

## 20.3 전역에 strict mode를 적용하는 것은 피하자
- 전역에 적용한 strict mode는 스크립트 단위로 적용된다.
## 20.4 함수 단위로 strict mode를 적용하는 것도 피하자
- 모든 함수에 일일이 strict mode를 적용하는 것은 번거로운 일이다.
- 따라서 strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.
## 20.5 strict mode가 발생시키는 에러
### 20.5.1 암묵적 전역
- 선언하지 않은 변수를 참조하면 Reference Error가 발생한다.
### 20.5.2 변수,함수 매개변수의 삭제
- delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.
### 20.5.3 매개변수 이름의 중복
- 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
### 20.5.4 with 문의 사용
- with 문을 사용하면 SyntaxError가 발생한다.
## 20.6 strict mode 적용에 의한 변화
### 20.6.1 일반 함수의 this
- strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩 된다.
- 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.
### 20.6.2 arguments 객체
- strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments객체에 반영되지 않는다.
