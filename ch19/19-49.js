function isInstanceof(instance, constructor){
    //프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    if(prototype === null) return false;
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));