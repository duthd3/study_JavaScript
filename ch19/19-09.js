//obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__ 를 상속받을 수 없다.
const obj = Object.create(null);
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));