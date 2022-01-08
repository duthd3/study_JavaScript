//ES6 rest parameter
function sum(...args){
    return args.reduce((pre,cur)=>pre+cur,0);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5));