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

#### NodeList
- HTMLCollection 객체의 부작용을 해결하기 위해 querySelectorAll 메서드를 사용한다.
- NodeList 객체는 실시간으로 노드 객체의 상태 변경을 반영하지 않는 객체다.
- NodeList 객체는 NodeList.prototype.forEach 메서드를 상속받아 사용할 수 있다.
- NodeList 객체는 대부분의 경우 노드 객체의 상태 변경을 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작한다.
- 그러나 childNodes 프로퍼티가 반환하는 NodeList 객체는 HTMLCollection 객체와 같이 실시간으로 노드 객체의 상태 변경을 반영하는 live 객체로 동작하므로 주의가 필요하다.
- 이처럼 HTMLCollection이나 NodeList 객체는 예상과 다르게 동작할 때가 있어 다루기 까다롭고 실수하기 쉽다.
- 따라서 노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection 이나 NodeList 객체를 배열로 변환하여 사용하는 것을 권장한다.(스프레드 문법이나 Array.from 메서드 사용)

## 39.3 노드 탐색
- 요소 노드를 취득한 다음, 취드한 요소 노드를 기점으로 DOM 트리의 노드를 옮겨 다니며 부모, 형제, 자식 노드 등을 탐색 해야 할 때가 있다.
- parentNode, previousSibling, firstChild, childNodes 프로퍼티는 Node.prototype이 제공하고, 프로퍼티 키에 Element가 포함된 previousElementSibling, nextElementSibling과 children 프로퍼티는 Element.prototype이 제공한다.
- 노프 탐색 프로퍼치는 모두 getter만 존재한다.(읽기전용 이다.)

### 39.3.1 공백 텍스트 노드
- HTML 요소 사이의 스페이스, 탭, 줄바꿈 등의 공백 문자는 텍스트 노드를 생성한다.(공백 노드)

### 39.3.2 자식 노드 탐색
|프로퍼티|설명|
|--|--|
|Node.prototype.childNodes|자식 노드 모두 탐색. NodeLisst에 담아 반환. 텍스트 노드도 포함되어 있을 수 있다.|
|Element.prototype.children|자식 노드 중에서 요소 노드만 모두 탐색하여 DOM 컬렉션 객체인 HTMLCollection에 담아 반환. 텍스트 노드 포함X|
|Node.prototype.firstChild|첫 번째 자식 노드를 반환한다. firstChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드이다.|
|Node.prototype.lastChild|마지막 자식 노드를 반환한다. 텍스트 노드이거나 요소 노드다.|
|Element.prototype.firstElementChild|첫 번째 자식 요소 노드를 반환한다. 요소 노드만 반환한다.|
|Element.prototype.lastElementChild|마지막 자식 요소 노드를 반환한다. 요소 노드만 반환한다.|

### 39.3.3 자식 노드 존재 확인
- 자식 노드가 존재하는지 확인하려면 Node.prototype.hasChildNodes 메서드를 사용한다.(텍스트 노드 포함)
- 자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지 확인하려면 hasChildNodes 메서드 대신 children.length 또는 Element 인터페이스의 childElementCount 프로퍼티를 사용한다.

### 39.3.4 요소 노드의 텍스트 노드 탐색

### 39.3.5 부모 노드 탐색
- 부모 노드를 탐색하려면 Node.prototype.parentNode 프로퍼티를 사용한다. 부모노드가 텍스트 노드인 경우는 없다.

### 39.3.6 형제 노드 탐색
- 부모노드가 같은 형제 노드를 탐색하려면 다음과 같은 노드 탐색 프로퍼티를 사용한다.
|프로퍼티|설명|
|--|--|
|Node.prototype.previousSibling|부모 노드가 같은 형제 노드 중에서 이전 형제 노드를 탐색 반환. 텍스트 노드일 수도 있다.|
|Node.prototype.nextSibling|부모 노드가 같은 형제 노드 중에서 자신의 다음 형제 노드를 탐색 반환. 텍스트 노드일 수도 있다.|
|Element.prototype.previousElementSibling|부모 노드가 같은 형제 요소 노드 중에서 자신의 이전 형제 요소노드를 탐색 반환. 요소노드만 반환|
|Element.prototype.nextElementSibling|부모 노드가 같은 형제 요소 노드 중에서 자신의 다음 형제 요소노드를 탐색 반환. 요소노드만 반환|

## 39.4 노드 정보 취득
- 노드 객체에 대한 정보를 취득하려면 다음과 같은 노드 정보 프로퍼티를 사용한다.
|프로퍼티|설명|
|--|--|
|Node.prototype.nodeType|노드 객체의 종류, 즉 노드 타입을 나타내는 상수를 반환한다.(1:요소노드, 3:텍스트 노드, 9:문서노드)|
|Node.prototype.nodeName|노드의 이름을 문자열로 반환. 요소노드:대문자 문자열로 태그 이름 반환, 텍스트 노드:#text, 문서노드:#document|

## 39.5 요소 노드의 텍스트 조작

### 39.5.1 nodeValue
- Node.prototype.nodeValue 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티다.
- nodeValue 프로퍼티는 참조와 할당 모두 가능하다.
- nodeValue 프로퍼티를 참조하면 노드 객체의 값을 반환한다. 노드 객체의 값이란 텍스트 노드의 텍스트다.(문서 노드나 요소 노드의 nodeValue프로퍼티를 참조하면 null을 반환한다.)
- 텍스트 노드의 nodeValue 프로퍼티에 값을 할당하면 텍스트 노드의 값, 즉 텍스트를 변경할 수 있다.

### 39.5.2 textContent
- Node.prototype.textContent 프로퍼티는 setter 와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다.

## 39.6 DOM 조작
 - DOM 조작은 새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 삭제 또는 교체하는 것을 말한다.
 - DOM 조작에 의해 DOM에 새로운 노드가 추가되거나 삭제되면 리플로우와 리페인트가 발생하는 원인이 되므로 성능에 영향을 준다(즉,주의가 필요하다).

### 39.6.1 innerHTML
- Element.prototype.innerHTML 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 HTML 마크업을 취득하거나 변경한다.
- 요소 노드의 innerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.

### 39.6.2 insertAdjacentHTML 메서드
- Element.prototype.insertAdjacentHTML(position, DOMString) 메서드는 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다.
- 두번째 인수로 전달한 HTML 마크업 문자열을 파싱하고 그 결과로 생성된 노드를 첫 번째 인수로 전달한 위치에 삽입하여 DOM에 반영한다.
- 첫 번째 인수로 전달할 수 있는 문자열은 'beforebegin', 'afterbegin', 'beforeend', 'afterend' 의 4가지다.

### 39.6.3 노드 생성과 추가
- 요소 노드 생성
  - Document.prototype.createElement(tagName) 메서드는 요소 노드를 생성하여 반환한다.
  - 그러나 요소 노드를 생성만 할 뿐 DOM에 추가하지는 않는다. 따라서 이후에 생성된 요소 노드를 DOM에 추가하는 처리가 별도로 필요하다.
- 텍스트 노드 생성
  - Document.prototype.createTextNode(text) 메서드는 텍스트 노드를 생성하여 반환한다.
  - 텍스트 노드는 요소 노드의 자식 노드다. 하지만 createTextNode 메서드로 생성한 텍스트 노드는 요소 노드의 자식 노드로 추가되지 않고 홀로 존재하는 상태다.
  - 즉, 이후에 생성된 텍스트 노드를 요소 노드에 추가하는 처리가 별도로 필요하다
- 텍스트 노드를 요소 노드의 자식 노드로 추가
  - Node.prototype.appendChild(childNode) 메서드는 매개변수 childNode에게 인수로 전달한 노드를 appendChild 메서드를 호출한 노드의 마지막 자식 노드로 추가한다.
- 요소 노드를 DOM에 추가
  
### 39.6.4 복수의 노드 생성과 축
- DocumentFragment 노드는 문서, 요소, 어트리뷰트, 텍스트 노드와 같은 노드 객체의 일종으로, 부모 노드가 없어서 기존 DOM과는 별도로 존재한다는 특징이 있다.
- 별도의 서브 DOM을 구성하여 기존 DOM에 추가하기 위한 용도로 사용한다.
- DocumentFragment 노드를 DOM에 추가하면 자신은 제거되고 자신의 자식 노드만 DOM에 추가된다.
- Document.prototype.createDocumentFragment 메서드는 비어 있는 DocumentFragment 노드를 생성하여 반환한다.

### 39.6.5 노드 삽입
- 마지막 노드로 추가
  - Node.prototype.appendChild 메서드는 인수로 전달받은 노드를 자신을 호출한 노드의 마지막 자식 노드로 DOM에 추가한다.
  - 노드를 추가할 위치를 지정할 수 없고 마지막 노드로 추가 된다. 
- 지정한 위치에 노드 삽입
  - Node.prototype.insertBefore(newNode, childNode) 메서드는 첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입한다.
  - 두 번째 인수로 전달받은 노드는 반드시 insertBefore 메서드를 호출한 노드의 자식 노드이어야 한다.
  - 두 번째 인수로 전달받은 노드가 null이면 첫 번째 인수로 전달받은 노드를 insertBefore 메서드를 호출한 노드의 마지막 자식 노드로 추가된다.

### 39.6.6 노드 이동
- DOM에 이미 존재하는 노드를 appendChild 또는 insertBefore 메서드를 사용하여 DOM에 다시 추가하면 현재 위치에서 노드를 제거하고 새로운 위치에 노드를 추가한다.

### 39.6.7 노드 복사
- Node.prototype.cloneNode([deep:true | false]) 메서드는 노드의 사본을 생성하여 반환한다.
- 매개변수 deep에 true를 인수로 전달하면 노드를 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성하고, false를 인수로 전달하거나 생략하면 노드를 얕은 복사하여 자신만의 사본을 생성한다.
- 얕은 복사로 생성된 요소 노드는 자손 노드를 복사하지 않으므로 텍스트 노드도 없다.

### 39.6.8 노드 교체
- Node.prototype.replaceChild(newChild, oldChild) 메서드는 자신을 호출한 노드의 자식 노드를 다른 노드로 교체한다.
- 첫 번째 매개변수 newChild에는 교체할 새로운 노드를 인수로 전달하고, 두 번째 매개변수 oldChild에는 이미 존재하는 교체될 노드를 인수로 전달한다.
- oldChild 매개변수에 인수로 전달한 노드는 replaceChild 메서드를 호출한 노드의 자식 노드이어야 한다. 

### 39.6.9 노드 삭제
- Node.prototype.removeChild(child) 메서드는 child 매개변수에 인수로 전달한 노드를 DOM에서 삭제한다.
- 인수로 전달한 노드는 removeChild 메서드를 호출한 노드의 자식 노드이어야 한다.

## 39.7 어트리뷰트
### 39.7.1 어트리뷰트 노드와 attributes 프로퍼티
- HTML 문서가 파싱될 때 HTML 요소의 어트리뷰트(이하 HTML 어트리뷰트)는 어트리뷰트 노드로 변환되어 요소 노드와 연결된다.
- HTML 어트리뷰트당 하나의 어트리뷰트 노드가 생성된다.
- 모든 어트리뷰트 노드의 참조는 유사 배열 객체이자 이터러블인 NamedNodeMap 객체에 담겨서 요소 노드의 attributes 프로퍼티에 저장된다.
- 요소 노드의 모든 어트리뷰트 노드는 요소 노드의 Element.prototype.attributes 프로퍼티로 취득 할 수 있다.
- attributes 프로퍼티는 getter만 존재하는 읽기 전용 접근자 프로퍼티 이며, 요소 노드의 모든 어트리뷰트 노드의 참조가 담긴 NamedNodeMap 객체를 반환한다.

### 39.7.2 HTML 어트리뷰트 조작
- Element.prototype.getAttribute/setAttribute 메서드를 사용하면 attributes 프로퍼티를 통하지 않고 요소 노드에서 메서드를 통해 직접 HTML 어트리뷰트 값을 취득하거나 변경할 수 있다.
- 특정 HTML 어트리뷰트가 존재하는지 확인하려면 Element.prototype.hasAttribute(attributeName) 메서드를 사용하고,
- 특정 HTML 어트리뷰트를 삭제하려면 Element.prototype.removeAttribute(attributeName) 메서드를 사용한다.

### 39.7.3 HTML 어트리뷰트 vs DOM 프로퍼티
- 요소 노드 객체에는 HTML 어트리뷰트에 대응하는 프로퍼티가 존재한다.
- 이 DOM 프로퍼티들은 HTML 어트리뷰트 값을 초기값으로 가지고 있다.
- DOM 프로퍼티는 setter 와 getter 모두 존재하는 접근자 프로퍼티다.
- 요소 노드는 상태를 가진다.
- 사용자가 input 요소의 입력필드에 값을 입력한다면, input 요소 노드는 사용자의 입력에 의해 변경된 최신상태를 관리해야하고, HTML 어트리뷰트로 지정한 초기상태도 관리해야 한다.
- 즉, 요소 노드는 2개의 상태(초기 상태와 최신 상태)를 관리해야 한다. 요소 노드의 초기 상태는 어트리뷰트 노드가 관리하고, 요소 노드의 최산 상태는 DOM 프로퍼티가 관리한다.
`어트리뷰트 노드`
- HTML 어트리뷰트로 지정한 HTML 요소의 초기 상태는 어트리뷰트 노드에서 관리한다.
- 사용자의 입력에 의해 상태가 변경되어도 변하지 않고 HTML 어트리뷰트로 지정한 HTML 요소의 `초기 상태를 그대로 유지`한다.
`DOM 프로퍼티`
- 사용자가 입력한 최신 상태는 HTML 어트리뷰트에 대응하는 요소 노드의 DOM 프로퍼티가 관리한다.
- DOM 프로퍼티는 사용자의 입력에 의한 상태 변화에 반응하여 언제나 `최신 상태를 유지`한다.
- `HTML 어트리뷰트와 DOM 프로퍼티의 대응 관계`
  - 대부분의 HTML 어트리뷰트는 HTML 어트리뷰트 이름과 동일한 DOM 프로퍼티와 1:1 로 대응한다.(항상 그렇지는 않다.)
  - id 어트리뷰트와 id 프로퍼티는 1:1 대응하며, 동일한 값으로 연동된다.
  - input 요소의 value 어트리뷰트 value 프로퍼티와 1:1 대응한다. 하지만 value 어트리뷰트는 초기 상태를, value 프로퍼티는 최신 상태를 갖는다.
  - class 어트리뷰트는 className, classList 프로퍼티와 대응한다.
  - for 어트리뷰트는 htmlFor 프로퍼티와 1:1 대응한다.
  - td 요소의 colspan 어트리뷰트는 대응하는 프로퍼티가 존재하지 않는다.
  - textContent 프로퍼티는 대응하는 어트리뷰트가 존재하지 않는다.
  - 어트리뷰트 이름은 대소문자를 구별하지 않지만 대응하는 프로퍼티 키는 카멜 케이스를 따른다.
- DOM 프로퍼티 값의 타입
  - getAttribute 메서드로 취득한 어트리뷰트 값은 언제나 문자열이다.
  - DOM 프로퍼티로 취득한 최산 상태 값은 문자열이 아닐 수도 있다.
  
### 39.7.4 data 어트리뷰트와 dataset 프로퍼티
- data 어트리뷰트와 dataset 프로퍼티를 사용하면 HTML 요소에 정의한 사용자 정의 어트리뷰트와 자바스크립트 간에 데이터를 교환할 수 있다.
- data 어트리뷰트 값은 HTMLElement.dataset 프로퍼티로 취득할 수 있다.

## 39.8 스타일
### 39.8.1 인라인 스타일 조작
- HTMLElement.prototype.style 프로퍼티는 setter 와 getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 인라인 스타일을 취득하거나 추가 또는 변경한다.

### 39.8.2 클래스 조작
`className`
- Element.prototype.className 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티로서 HTML 요소의 class 어트리뷰트 값을 취득하거나 변경한다.
`classList`
- Element.prototype.classList 프로퍼티는 class 어트리뷰트의 정보를 담은 DOMTokenList 객체를 반환한다.








