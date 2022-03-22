# 39.DOM
- DOM 은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조다.

## 39.1 노드
### 39.1.1 HTML 요소와 노드 객체
- HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환된다.
- 이 때 HTML 요소와 어트리뷰트는 어트리뷰트 노드로, HTML 요소의 텍스트 콘텐츠는 텍스트 노드로 변환된다.
- 트리 자료구조는 노드들의 계층 구조로 이뤄진다.
- 노드 객체들로 구성된 트리 자료구조를 DOM 이라 한다.

### 39.1.2 노드 객체의 타입
- 노드 객체는 종류가 있고 상속 구조를 갖는다.
- 노드 객체는 총 12개의 종류가 있다. 이 중에서 중요한 노드 타입은 다음과 같이 4가지다.
  - `문서 노드`
    - 문서 노드는 DOM 트리의 최상위에 있는 루트 노드로서 document 객체를 가리킨다.
    - document 객체는 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체로서 전역 객체 window의 document 프로퍼티에 바인딩되어 있다.
    - 브라우저 환경의 모든 자바스크립트 코드는 script 태그에 의해 분리되어 있어도 하나의 전역 객체 window를 공유한다.
    - 즉, HTML 문서당 document 객체는 유일하다.
   
  - `요소 노드`
    - 요소 노드는 HTML 요소를 가리키는 객체다. 요소 노드는 HTML 요소 간의 중첩에 의해 부자 관계를 가진다.
    - 요소 노드는 문서의 구조를 표현한다.
  
  - `어트리뷰트 노드`
    - 어트리뷰트 노드는 HTML 요소의 어트리뷰트를 가리키는 객체다.
    - 어트리뷰트 노드는 어트리뷰트가 지정된 HTML 요소의 요소 노드와 연결되어 있다. 단, 요소 노드는 부모 노드와 연결되어 있지만 어트리뷰트 노드는 부모 노드와 연결되어 있지 않다.
    - 따라서 어트리뷰트 노드에 접근하여 어트리뷰트를 참조하거나 변경하려면 먼저 요소 노드에 접근해야 한다.

  - `텍스트 노드`
    - 텍스트 노드는 HTML 요소의 텍스트를 가리키는 객체다. 문서의 정보를 표현한다.
    - 텍스트 노드는 요소 노드의 자식 노드이며, 자식 노드를 가질 수 없는 리프 노드이다.
    - 텍스트 노드에 접근하려면 먼저 부모 노드인 요소 노드에 접근해야 한다.

### 39.1.3 노드 객체의 상속 구조
- 모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다.
- 문서 노드는 Document, HTMLDocument 인터페이스를 상속받고, 어트리뷰트 노드는 Attr, 텍스트 노드는 CharacterData 인터페이스를 각각 상속받는다.

## 39.2 요소 노드 취득
- HTML의 구조나 내용 또는 스타일 등을 동적으로 조작하려면 먼저 요소 노드를 취득해야 한다.

### 39.2.1 id를 이용한 요소 노드 취득
- Document.prototype.getElementById 메서드는 인수로 전달한 id 어트리뷰트 값을 갖는 하나의 요소노드를 탐색하여 반환한다.
- HTML 문서 내에는 중복된 id 값을 갖는 요소가 여러 개 존재할 가능성이 있다.
- 이러한 경우 getElementById 메서드는 인수로 전달된 id 값을 갖는 첫 번째 요소 노드만 반환한다.
- HTML 요소에 id 어트리뷰트를 부여하면 id 값과 동일한 이름의 전역변수가 암묵적으로 선언되고 해당 노드 객체가 할당되는 부수 효과가 있다.
- 단, id 값과 동일한 이름의 전역변수가 이미 선언되어 있으면 이 전역 변수에 노드 객체가 재할당되지 않는다.

### 39.2.2 태그 이름을 이용한 요소 노드 취득
- (Document.prototype/Element.prototype).getElementsByTagName 메서드는 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다.
- 메서드 이름에 포함된 Elements가 복수형인 것에서 알 수 있듯이 getElementByTagName 메서드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.
- HTML 문서의 모든 요소 노드를 취득하려면 getElementsByTagName 메서드의 인수로'*'를 전달한다.
- Document.prototype.getElementsByTagName 메서드는 DOM의 루트 노드인 문서 노드, 즉 document를 통해 호출하며 DOM 전체에서 요소 노드를 탐색하여 반환한다.
- Element.prototype.getElementsByTagName 메서드는 특정 요소 노드를 통해 호출하며, 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색하여 반환한다.

### 39.2.3 class를 이용한 요소 노드 취득
- Document.prototype/Element.prototype.getElementsByClassName 메서드는 인수로 전달한 class 어트리뷰트 값을 갖는 모든 요소 노드들은 탐색하여 반환한다.
- 인수로 전달할 class 값은 공백으로 구분하여 여러 개의 class를 지정할 수 있다.
- 태그이름과 같이 Document.prototype에 정의된 메서드와 Element.prototype에 정의된 메서드가 있다.
- Document.prototype.getElementsByClassName메서드는 DOM의 루트 노드인 문서 노드 즉, document를 통해 호출하며 DOM 전체에서 요소 노드를 탐색하여 반환한다.
- Elemnet.prototype.getElementsByClassName 메서드는 특정 요소 노드를 통해 호출하며 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색하여 반환한다.

### 39.2.4 CSS 선택자를 이용한 요소 노드 취득
- Document.prototype/Element.prototype.querySelector 메서드는 인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다.
- Document.prototype/Element.prototype.querySelectorAll 메서드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 NodeList(유사 배열, 이터러블) 객체를 반환한다.
- id 어트리뷰트가 있는 요소 노드를 취득하는 경우에는 getElementById 메서드를 사용하고 그 외의 경우에는 querySelector, querySelectorAll 메서드를 사용하는 것을 권장한다.

### 39.2.5 특정 요소 노드를 취득할 수 있는지 확인
- Element.prototype.matches 메서드는 인수로 전달한 CSS 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인한다.

### 39.2.6 HTMLCollection 과 NodeList
- DOM 컬렉션 객체인 HTMLCollection과 NodeList는 DOM API가 여러개의 결과값을 반환하기 위한 DOM 컬렉션 객체다.
- 둘 다 모두 유사 배열 객체이면서 이터러블이다. 따라서 for...of 문으로 순회할 수 있으며 스프레드 문법을 사용하여 간단히 배열로 변환할 수 있다.
- 중요한 특징은 둘 다 살아 있는 객체라는 것이다. HTMLCollection은 언제나 live 객체로 동작한다.
- 단, NodeList는 대부분의 경우 노드 객체의 상태 변화를 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작하지만 경우에 따라 live 객체로 동작할 때가 있다.

#### HTMLCollection
- getElementsByTagName, getElementsByClassName 메서드가 반환하는 HTMLCollection 객체는 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 DOM 컬렉션 객체다.
- HTMLCollection 객체는 실시간으로 노드 객체의 상태 변경을 반영하여 요소를 제거할 수 있기 때문에 HTMLCollection 객체를 for 문으로 순회하면서 노드 객체의 상태를 변경해야 할 때 주의해야 한다.
- 이 문제는 for 문을 역방향으로 순회하는 방법으로 회피할 수 있다.



























