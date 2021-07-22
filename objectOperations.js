//what is the Big O analysis of the following operations on the object 'obj'? 
const obj = {}

//1. insertion
obj[1] = 'a';

//2. removal 
delete obj[1];

//3. searching (for a value)
obj[1] = 'a';
console.log(Object.values(obj).find(value => value === 'a'));

//4. access 
obj[1]