# 40.이벤트

## 40.1 이벤트 드리븐 프로그래밍
- 브라우저는 처리해야 할 특정 사건이 발생하면 이를 감지하여 이벤트를 발생 시킨다.
- 이벤트가 발생했을 때 호출될 함수를 이벤트 핸들러라 하고, 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 이벤트 핸들러 등록이라 한다.
```js
<button>Click me!</button>
    <script>
        const $button = document.querySelector('button');
        $button.onclick = () => {alert('button click');};
    </script>
```
- 프로그램의 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식을 이벤트 드리븐 프로그래밍 이라 한다.

## 40.2 이벤트 타입
- 이벤트 타입은 이벤트의 종류를 나타내는 문자열이다.
### 40.2.1 마우스 이벤트
- click : 마우스 버튼을 클릭했을 때
- dbclick : 마우스 버튼을 더블 클릭했을 때
- mousedown : 마우스 버튼을 눌렀을 때
- mouseup : 누르고 있던 마우스 버튼을 놓았을 때
- mousemove : 마우스 커서를 움직였을 때
- mouseenter : 마우스 커서를 HTML 요소 안으로 이동했을 때(버블링 되지 않는다.)
- mouseover : 마우스 커서를 HTML 요소 안으로 이동했을 때(버블링 된다.)
- mouseleave : 마우스 커서를 HTML 요소 밖으로 이동했을 때(버블링 되지 않는다.)
- mouseout : 마우스 커서를 HTML 요소 밖으로 이동했을 때(버블링 된다.)

### 40.2.2 키보드 이벤트
- keydown:모든 키를 눌렀을 때 발생한다.
- keypress:문자 키를 눌렀을 때 연속적으로 발생한다.
- keyup:누르고 있던 키를 놓았을 때 한 번만 발생한다.

### 40.2.3 포커스 이벤트
- focus:HTML 요소가 포커스를 받았을 때(버블링되지 않는다.)
- blur:HTML 요소가 포커스를 잃었을 때(버블링되지 않는다.)
- focusin:HTML 요소가 포커스를 받았을 때(버블링된다.)
- focusout:HTML 요소가 포커스를 잃었을 때(버블링된다.)

### 40.2.4 폼 이벤트
- submit:form 요소 내의 submit 버튼을 클릭했을 때
- reset:form 요소 내의 reset 버튼을 클릭했을 때

### 40.2.5 값 변경 이벤트
- input
- change
- readystatechange

### 40.2.6 DOM 뮤테이션 이벤트
- DOMContentLoaded

### 40.2.7 뷰 이벤트
- resize
- scroll

### 40.2.8 리소스 이벤트
- load
- unload
- abort
- error

## 40.3 이벤트 핸들러 등록
- 이벤트 핸들러는 이벤트가 발생했을 때 브라우저에 호출을 위임한 함수다. 즉, 브라우저에 의해 호출될 함수가 이벤트 핸들러다.

### 40.3.1 이벤트 핸들러 어트리뷰트 방식
- HTML 요소의 어트리뷰트 중에는 이벤트에 대응하는 이벤트 핸들러 어트리뷰트가 있다.
- 이벤트 핸들러 어트리뷰트 값으로 함수 호출문 등의 문을 할당하면 이벤트 핸들러가 등록된다.
- 함수 참조가 아닌 함수 호출문 등의 문을 할당한다.
- 이벤트 핸들러를 등록할 때 함수 참조를 등록해야 브라우저가 이벤트 핸들러를 호출할 수 있다.
- 이벤트 핸들러 어트리뷰트 값은 암묵적으로 생성될 이벤트 핸들러의 함수 몸체를 의미한다.

### 40.3.2 이벤트 핸들러 프로퍼티 방식
- 이벤트 핸들러 프로퍼티에 함수를 바인딩하면 이벤트 핸들러가 등록된다.
```js
<button>Click me!</button>
    <script>
        const $button = document.querySelector('button')
        $button.onclick = function(){
            console.log('button click');
        }
    </script>
```
- 이벤트 핸들러를 등록하기 위해서는 이벤트를 발생시킬 객체인 이벤트 타깃, 이벤트의 종류를 나타내는 문자열인 이벤트 타입 그리고 이벤트 핸들러를 지정할 필요가 있다.
- 이벤트 핸들러 프로퍼티에는 하나의 이벤트 핸들러만 바인딩할 수 있다는 단점이 있다.

### 40.3.3 addEventListener 메서드 방식
- EventTarget.prototype.addEventListner 메서드를 사용하여 이벤트 핸들러를 등록할 수 있다.
- EventTarget.addEventListener('eventType', functionName, [useCapture]);
- 하나 이상의 이벤트 핸들러를 등록할 수 있다.

## 40.4 이벤트 핸들러 제거
- addEventListener 메서드로 등록한 이벤트 핸들러를 제거하려면 EventTarget.prototype.removeEventListener 메서드를 사용한다.
- removeEventListener 메서드에 전달할 인수는 addEventListener 메서드와 동일하다.
- 이벤트 핸들러를 제거하려면 이벤트 핸들러의 참조를 변수나 자료구조에 저장하고 있어야 한다.

## 40.5 이벤트 객체
- 이벤트가 발생하면 이벤트에 관련한 다양한 정보를 담고 있는 이벤트 객체가 동적으로 생성된다.
- 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.
- 이벤트 핸들러 어트리뷰트 방식의 경우 이벤트 객체를 전달받으려면 이벤트 핸들러의 첫 번째 매개변수 이름이 반드시 event이어야 한다.

### 40.5.1 이벤트 객체의 상속 구조

### 40.5.2 이벤트 객체의 공통 프로퍼티
- Event 인터페이스, 즉 Event.prototype에 정의되어 있는 이벤트 관련 프로퍼티는 UIEvent, CustomEvent, MouseEvent등 모든 파생 이벤트 객체에 상속된다.
- 즉, Event 인터페이스의 이벤트 관련 프로퍼티는 모든 이벤트 객체가 상속받는 공통 프로퍼티다.

### 40.5.3 마우스 정보 취득
- 마우스 포인터의 좌표 정보를 나타내는 프로퍼티:screenX/screenY, clientX/clientY, pageX/pageY, offsetX/offsetY
- 버튼 정보를 나타내는 프로퍼티:altKey,ctrlKey,shiftKey,button

### 40.5.4 키보드 정보 취득

## 40.6 이벤트 전파
- DOM 트리 상에 존재하는 DOM 요소 노드에서 발생한 이벤트는 DOM 트리를 통해 전파된다.
- 이벤트는 이벤트를 발생시킨 이벤트 타깃은 물론 상위 DOM 요소에서도 캐치할 수 있다.
- 포커스 이벤트:focus/blur
- 리소스 이벤트:load/unload/abort/error
- 마우스 이벤트:mouseenter/mouseleave
- 위 3개의 이벤트는 버블링을 통해 전파되지 않는다.
- 즉, Event 인터페이스의 이벤트 관련 프로퍼티는 모든 이벤트 객체가 상속받는 공통 프로퍼티다.
- 즉, Event 인터페이스의 이벤트 관련 프로퍼티는 모든 이벤트 객체가 상속받는 공통 프로퍼티다.

## 40.7 이벤트 위임
- 
- 즉, Event 인터페이스의 이벤트 관련 프로퍼티는 모든 이벤트 객체가 상속받는 공통 프로퍼티다.ㅇㅟ임
- 즉, Event 인터페이스의 이벤트 관련 프로퍼티는 모든 이벤트 객체가 상속받는 공통 프로퍼티다.
       
