# 43.Ajax

## 43.1 Ajax란?
- Ajax란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다.
- Ajax는 브라우저에서 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다.
- 변경할 필요가 있는 부분만 한정적으로 렌더링하는 방식이 가능하다.
- `Ajax의 장점`
  - 변경할 부분을 갱신하는데 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신이 발생하지 않는다.
  - 변경할 필요가 없는 부분은 다시 렌더링하지 않는다.
  - 클라이언트와 서버와의 통신이 비동기 방식으로 동작한다.

## 43.2 JSON
- JSON은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷이다.

### 43.2.1 JSON 표기 방식
- JSON은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 `텍스트`다.

### 43.2.2 JSON.stringify
- JSON.stringify 메서드는 객체를 JSON 포맷의 문자열로 변환한다.
- 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화해야 하는데 이를 직렬화라 한다.
- 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환한다.

### 43.2.3 JSON.parse
- JSON.parse 메서드는 JSON 포맷의 문자열을 객체로 변환한다.
- 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이다. 이 문자열을 객체로 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데 이를 역직렬화라 한다.

## 43.3 XMLHttpRequest
- 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest 객체를 사용한다.
- Web API인 XMLHttpRequest객체는 HTTP 요청 전송과 HTTP 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공한다.

### 43.3.1 XMLHttpRequest 객체 생성
- XMLHttpRequest 객체는 XMLHttpRequest 생성자 함수를 호출하여 생성한다.
```js
const xhr = new XMLHttpRequest();
```

### 43.3.2 XMLHttpRequest 객체의 프로퍼티와 메서드
- XMLHttpRequest 객체는 다양한 프로퍼티와 메서드를 제공한다.

### 43.3.3 HTTP 요청 전송
- 1.XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다.
- 2.필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정한다.
- 3.XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.
- XMLHttpRequest.prototype.open
  - open 메서드는 서버에 전송할 HTTP 요청을 초기화 한다.
  ```js
    xhr.open(method, url[, async])
  ```
  - method(HTTP 요청메서드, "GET", "POST", "PUT", "DELETE" 등)
  - url(HTTP 요청을 전송할 URL)
  - async(비동기 요청 여부, 옵션으로 기본값은 true이며, 비동기 방식으로 동작한다.)
- XMLHttpRequest.prototype.send
  - send 메서드는 open 메서드로 초기화된 HTTP 요청을 서버에 전송한다.
  - 기본적으로 서버로 전송하는 데이터는 GET, POST 요청 메서드에 따라 전송 방식에 차이가 있다.
  - GET 요청 메서드의 경우 데이터를 URL의 일부분인 쿼리 문자열로 서버에 전송한다.
  - POST 요청 메서드의 경우 데이터를 요청 몸체에 담아 전송한다.
  - send 메서드에는 요청 몸체에 담아 전송할 데이터(페이로드)를 인수로 전달할 수 있다.
  - 페이로드가 객체인 경우 반드시 JSON.stringfy 메서드를 사용하여 직렬화한 다음 전달해야 한다.
- XMLHttpRequest.prototype.setRequestHeader
  - setRequestHeader 메서드는 특정 HTTP 요청의 헤더 값을 설정한다.
  - 반드시 open 메서드를 호출한 이후에 호출해야 한다.
  
