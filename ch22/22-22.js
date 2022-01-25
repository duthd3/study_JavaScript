function getThisBinding(){
    return this;
}

//this로 사용할 객체
const thisArg = {a:1};

//bind 메서드는 함수에 this로 사용할 객체를 전달한다.
//bind 메서드는 함수를 호출하지는 않는다.
console.log(getThisBinding.bind(thisArg));
//bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
console.log(getThisBinding.bind(thisArg)());