function sum(){
    let res = 0;

    for(let i=0; i<arguments.length; i++){
        res += arguments[i];
    }

    return res;
}

console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3,));