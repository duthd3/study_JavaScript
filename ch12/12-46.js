var factorial = function foo(n) {
    if(n<=1) return 1;
    return n*factorial(n-1);
};

console.log(factorial(5));

function outer(){
    var x=1;
    //중첩 함수
    function inner(){
        var y = 2;
        console.log(x+y);
    }
    inner();
}

outer();

//n만큼 어떤 일을 반복한다.
function repeat1(n){
    for(var i=0; i<n; i++) console.log(i);
}

repeat1(5);

//n만큼 어떤 일을 반복한다.
function repeat2(n){
    for(var i=0; i<n; i++){
        if(i%2) console.log(i);
    }
}
