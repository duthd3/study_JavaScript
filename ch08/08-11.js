foo:{
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!')

outer: for(var i = 0; i<3; i++){
    for(var j=0; i<3; j++){
        if(i + j === 3) break outer;
        console.log('${i},${j}');
    }
}

console.log('Done!');

var string = 'Hello World.';
var search = 'l';
var index;

for(var i=0; i<string.length; i++){
    if(string[i] === search){
        index = i;
        break;
    }
}
console.log(index);

var string = 'Hello World.';
var search = 'l';
var count = 0;

for(var i=0; i<string.length; i++){
    if(string[i] !== search)continue;
    count++;
}

console.log(count);
