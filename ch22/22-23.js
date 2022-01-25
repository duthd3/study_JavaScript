const person = {
    name:'Lee',
    foo(callback){
        setTimeout(callback, 100);
    }
};

person.foo(function(){
    console.log(`Hi! my name is ${this.name}.`);// this가 다름
});