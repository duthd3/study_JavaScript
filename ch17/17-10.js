function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}

const circle = new Circle(1);
console.log(circle);