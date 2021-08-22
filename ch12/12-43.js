function countdown(n){
    for(var i=n; i>=0; i--)console.log(i);
}

countdown(10);

function countdown(n){
    if(n<0) return;
    console.log(n);
    countdown(n-1);
}

countdown(10);

function factorial(n){
    //탈출조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if(n<=1) return 1;
    //재귀 호출
    return n*factorial(n-1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
