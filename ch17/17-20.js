//scope-safe constructor pattern
function Circle(radius){
    //생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
    //this 에 바인딩된다. 이때 this와 Circle은 프로토타입에 의해 연결된다.

    //이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
    //즉, this와 Circle은 프로토타입에 의해 연결되지 않는다.
    if(!(this instanceof Circle)){
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}

//new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle = new Circle(5);
console.log(circle.getDiameter());