//프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성한다.
const obj = Objcet.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj)===null);

//obj는 Object.prototype의 빌트인 메서드를 사용할 수 없다.
console.log(obj.hasOwnProperty('a'));