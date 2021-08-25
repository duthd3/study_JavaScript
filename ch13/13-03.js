var x = 'global';

function foo(){
    var x = 'local';
    console.log(x);
}

foo();

console.log(x);

function foo(){
    var x=1;
    var x=2;
    console.log(x);
}

foo();

//let 이나 const키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
function bar(){
    let x = 1;
    let x = 2;
}

bar();
