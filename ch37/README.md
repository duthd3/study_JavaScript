# 37.Set과 Map

## 37.1 Set
- Set 객체는 중복되지 않는 유일한 값들의 집합이다. Set 객체는 배열과 유사하지만 다음과 같은 차이가 있다.
  - 동일한 값을 중복하여 포함할 수 없다.
  - 요소 순서에 의미가 없다.
  - 인덱스로 요소에 접근할 수 없다.
### 37.1.1 Set 객체의 생성
- Set 객체는 Set 생성자 함수로 생성한다. Set 생성자 함수에 인수를 전달하지 않으면 빈 Set 객체가 생성된다.
```js
const set = new Set();
console.log(set)
```
- Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성한다.
- 이때 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.

### 37.1.2 요소 개수 확인
- Set 객체의 요소 개수를 확인할 때는 Set.prototype.size 프로퍼티를 사용한다.
- size 프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티다. 따라서 size 프로퍼티에 숫자를 할당하여 Set 객체의 요소 개수를 변경할 수 없다.

### 37.1.3 요소 추가
- Set 객체에 요소를 추가할 때는 Set.prototype.add 메서드를 사용한다.
- add 메서드는 새로운 요소가 추가된 Set 객체를 반환한다.

### 37.1.4 요소 존재 여부 확인
- Set 객체에 특정 요소가 존재하는지 확인하려면 Set.prototype.has 메서드를 사용한다. 불리언 값을 반환한다.

### 37.1.5 요소 삭제
- Set 객체의 특정 요소를 삭제하려면 Set.prototype.delete 메서드를 사용한다. 불리언 값을 반환한다.
- delete 메서드에는 인덱스가 아니라 삭제하려는 요소값을 인수로 전달해야 한다. 
- 불리언 값을 반환하기 때문에 add 메서드처럼 연속적으로 호출할 수 없다.

### 37.1.6 요소 일괄 삭제
- Set 객체의 모든 요소를 일괄 삭제하려면 Set.prototype.clear 메서드를 사용한다.

### 37.1.7 요소순회
- Set 객체의 요소를 순회하려면 Set.prototype.forEach 메서드를 사용한다.
- 콜백 함수와 forEach 메서드의 콜백 함수 내부에서 this로 사용될 객체를 인수로 전달한다.
- 이때 콜백 함수는 3개의 인수를 전달 받는다.
  - 1.현재 순회 중인 요소값
  - 2.현재 순회 중인 요소값
  - 3.현재 순회 중인 Set 객체 자체
- Set 객체는 `이터러블`이다. 따라서 for...of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링의 대상이 될 수도 있다.

### 37.1.8 집합연산
- Set 객체는 수학적 집합을 구현하기 위한 자료구조다.
- 교집합
```js
Set.prototype.intersection = function(set){
    const result = new Set();

    for(const value of set){
        if(this.has(value)) result.add(value);
    }

    return result;

};

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setA.intersection(setB));
console.log(setB.intersection(setA));
```

- 합집합
```js
Set.prototype.union = function(set){
    const result = new Set(this);

    for(const value of set){
        result.add(value);
    }
    return result;
};

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setA.union(setB));
console.log(setB.union(setA));
```
- 차집합
```js
Set.prototype.difference = function(set){
    const result = new Set(this);

    for(const value of set){
        result.delete(value);
    }
    return result;
};

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setA.difference(setB));
console.log(setB.difference(setA));
```

## 37.2 Map
- Map 객체는 키와 값의 쌍으로 이루어진 컬렉션이다. 
- Map 객체는 객체를 포함한 모든 값을 키로 사용할 수 있다.
- 이터러블이다.
- 요소의 개수를 확인하기 위해서 map.size 함수를 사용한다.

### 37.2.1 Map 객체의 생성
- Map 객체는 Map 생성자 함수로 생성한다.
- Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성할 수 있다. 이때 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다.
- Map 생성자 함수의 인수로 전달한 이터러블에 중복된 키를 갖는 요소가 존재하면 값이 덮어써진다. 따라서 Map 객체에는 중복된 키를 갖는 요소가 존재할 수 없다.

### 37.2.2 요소 개수 확인
- Map 객체의 요소 개수를 확인할 때는 Map.prototype.size 프로퍼티를 사용한다.
- size 프로퍼티에 숫자르 할당하여 Map 객체의 요소 개수를 변경할 수 없다.

### 37.2.3 요소 추가
- Map 객체에 요소를 추가할 때는 Map.prototype.set 메서드를 사용한다.
- set 메서드는 새로운 요소가 추가된 Map 객체를 반환한다ㅏ. 따라서 set 메서드를 호출한 후에 set 메서드를 연속적으로 호출할 수 있다.

### 37.2.4 요소 취득
- Map 객체에서 특정 요소를 취득하려면 Map.prototype.get 메서드를 사용한다.

### 37.2.5 요소 존재 여부 확인
- Map 객체에 특정 요소가 존재하는지 확인하려면 Map.prototype.has 메서드를 사용한다.

### 37.2.6 요소 삭제
- Map 객체의 요소를 삭제하려면 Map.prototype.delete 메서드를 사용한다.

### 37.2.7 요소 일괄 삭제
- Map 객체의 요소를 일괄 삭제하려면 Map.prototype.clear 메서드를 사용한다.

### 37.2.8 요소 순회
- Map 객체의 요소를 순회하려면 Map.prototype.forEach 메서드를 사용한다.
- 콜백 함수와 forEach 메서드의 콜백 함수 내부에서 this로 사용될 객체를 인수로 전달한다. 콜백함수는 3개이 인수를 전달받는다.
  - 1.현재 순회 중인 요소값
  - 2.현재 순회 중인 요소키
  - 3.현재 순회 중인 Map 객체 자체
- Map 객체는 이터러블이다.
- Map 객체는 이터러블이면서 동시에 이터레이터인 객체를 반환하는 메서드를 제공한다.
  - 1.Map.prototype.keys : `요소키`를 값으로 갖는다.
  - 2.Map.prototype.values : `요소값`을 값으로 갖는다.
  - 3.Map.prototype.entries : `요소키와 요소값`을 값으로 갖는다.
