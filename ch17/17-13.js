//함수는 객체다.
function foo(){

}

foo.prop = 10;

foo.method = function(){
    console.log(this.prop);
};

foo.method();