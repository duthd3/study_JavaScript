const{firstName = 'Ungmo', lastName } = {lastName:'Lee'};
console.log(firstName, lastName);

const{firstName:fn = 'Ungmo', lastName:ln} = {lastName:'Lee'};
console.log(fn, ln);