//생성자 함수
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}
//new 연산자 없이 생성자 함수를 호출하면 일반 함수로서 호출된다.
const circle = Circle(5);
console.log(circle);

console.log(radius);
console.log(getDiameter());