//생성자 함수
function Circle(radius){
    //인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}

const circle1 = new Circle(5);
console.log(circle1.radius);