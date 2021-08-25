var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수

if(true){
    var var2 = 2;
    if(true){
        var var3 = 3;
    }
}

function foo(){
    var var4 = 4; //함수 내에서 선언한 변수
    function bar(){
        var var5 = 5; //중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
