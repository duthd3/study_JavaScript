const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a',
};

for(const key in obj){
    if(!obj.hasOwnProperty(key)) continue;
    console.log(key + ':' + obj[key]);
}