var circle={
    radius: 5,

    //원의 지름
    getDiameter: function(){
        return 2*this.radius; //this는 circle을 가리킨다.
    }
};

console.log(circle.getDiameter());
