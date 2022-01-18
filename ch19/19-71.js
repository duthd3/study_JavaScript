const arr = [1,2,3];
arr.x = 10;

for(const i in arr){
    console.log(arr[i]);
};

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//forEach 메서드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach(v => console.log(v));
//for...of 는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for(const value of arr){
    console.log(value);
};