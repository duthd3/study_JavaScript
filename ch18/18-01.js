//1.함수는 무명의 리터럴로 생성할 수 있다.
//2.함수는 변수에 저장할 수 있다.

const increase = function(num){
    return ++num;
};

const decrease = function(num){
    return --num;
};
//함수는 객체에 저장할 수 있다.
const predicates = {increase, decrease};


//함수의 매개변수에 전달할 수 있다.
//함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate){
    let num = 0;
    return function(){
        num = predicate(num);
        return num;
    };
}

//함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());

//함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());
