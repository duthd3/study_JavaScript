function multiply(x, y){
    const iterator = arguments[Symbol.iterator]();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    return x*y;
}

multiply(1,2,3);