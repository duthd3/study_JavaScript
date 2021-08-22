//익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
//익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function(i){
    if(i%2) console.log(i);
});

var res = [1,2,3,].map(function(item){
    return item*2;
});

console.log(res);

//콜백 함수를 사용하는 고차 함수 filter
res = [1,2,3].filter(function(item){
    return item%2;
});
console.log(res);

res=[1,2,3].reduce(function(acc,cur){
    return acc + cur;
}, 0);
console.log(res);
