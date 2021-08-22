//외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n, f){
    for(var i =0; i<n; i++){
        f(i);
    }
}

var logAll = function(i){
    console.log(i);
}

//반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll);

var logOdds = function(i){
    if(i%2) console.log(i);
};

repeat(5, logOdds);
