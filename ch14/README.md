# 14.전역 변수의 문제점

## 14.1 변수의 생명주기
- 지역변수의 생명주기
  - 함수 내부에서 선언된 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다.
  - 지역 변수의 생명 주기는 함수의 생명 주기와 일치한다.
- 전역 변수의 생명주기
  - var 키워드로 선언한 전역 변수의 생명주기는 전역 객체의 생명 주기와 일치한다.

## 14.2 전역변수의 문제점
- 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용.
- 변수의 유효 범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있다.
- 전역 변수는 생명주기가 길다.
- 전역 변수는 스코프 체인 상에서 종점에 존재한다. 즉 전역 변수의 검색 속도가 가장 느리다.

## 14.3 전역 변수의 사용을 억제하는 방법
- 변수의 스코프는 좁을수록 좋다.
- 무분별한 전역 변수의 남발은 억제해야 한다.
- 1.즉시 실행함수
  - 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.

- 2.네임스페이스 객체
  - 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법이다.
  
- 3.모듈 패턴
  
 