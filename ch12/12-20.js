function add(x,y){
    console.log(arguments);
    return x+y;
}

add(2, 5, 10);

function add(x,y){
    if(typeof x!=='number' || typeof y!=='number'){
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x+y;
}

console.log(add(2));
console.log(add('a','b'));

function add(a,b,c){
    a = a||0;
    b = b||0;
    c = c||0;
    return a+b+c;
}

console.log(add(1,2,3));
console.log(add(1,2));
console.log(add(1));
console.log(add( ));

function multiply(x,y){
    return x*y;
}

var result = multiply(3,5);
console.log(result);
