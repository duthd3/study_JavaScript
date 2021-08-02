# 7.연산자

## 7.1산술연산자
- 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다.
- 산술 연산이 불가능한 경우 NaN을 반환한다.
- 이항 산술 연산자
  - 2개의 피연산자를 산술 연산하여 숫자 값을 만든다.(+,-,*,/,%)
- 단항 산술 연산자
  - 1개의 피연산자를 산술 연산하여 숫자 값을 만든다.(++,--,+,-)
  - ++,-- 연산을 하면 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
  - 전위 증가/감소 연산자는 먼저 피연산자의 값을 증가/감소 시킨 후, 다른 연산을 수행한다.
  - 후위 증가/감소 연산자는 먼저 다른 연산을 수행한 후, 피연산자의 값을 증가/감소 시킨다.
- 문자열 연결 연산자
  - +연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.

## 7.2할당연산자
- 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다.
- x=5
- x+=5
- x-=5
- x*=5
- x/=5
- x%=5

## 7.3비교연산자
- 좌항과 우항의 피연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다.
- 동등/일치 비교 연산자
- 동등비교:==(x==y x와y의 값이 같음)->결과 예측이 어렵다. 따라서 사용하지 않는 편이 좋다.
- 일치비교:===(x===y x와y의 값과 타입이 같음)
- 부동등비교:!=(x!=y x와y의 값이 다름)
- 불일치비교:!==(x!==y x와y의 값과 타입이 다름)
- 대소 관계 비교 연산자
  - >,<,>=,<=

## 7.4삼항조건연산자
- 조건식의 평가 결과에 따라 반환할 값을 결정한다.
- 조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값

## 7.5논리연산자
- ||:논리합(OR)
- &&:논리곱(AND)
- !:부정(NOT)

## 7.6쉼표연산자
- 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환한다.

## 7.7그룹연산자
- 그룹연산자를 사용하면 연산자의 우선순위를 조절할 수 있다.

## 7.8typeof연산자
- 피연산자의 데이터 타입을 문자열로 반환한다.
- "string","number","boolean","undefined","symbol","object","function" 중 하나를 반환한다.
- typeof 연산자로 null값을 연산해 보면, 'object'를 반환한다. 값이 null타입인지 확인할 때는 ===을 사용.

## 7.9지수연산자
- 좌항의 피연산자를 밑으로, 우항의 피연산자를 지수로 거듭 제곱하여 숫자 값을 반환한다.