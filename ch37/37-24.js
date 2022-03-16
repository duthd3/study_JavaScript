Set.prototype.isSuperset = function(set){
    for(const value of set){
        if(!this.has(value)) return false;
    }
    return true;
};

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setA.isSuperset(setB));
console.log(setB.isSuperset(setA));
