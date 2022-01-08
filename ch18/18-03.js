function square(number){
    return number*number;
}

console.log(Object.getOwnPropertyDescriptors(square));

console.log(Object.getOwnPropertyDescriptor(square, '__proto__'));
