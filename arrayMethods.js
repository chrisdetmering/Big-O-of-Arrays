// what is the big O of the following operations on the array

const numbers = [1, 2, 3, 4];

//1.
numbers.push(5);

//2. 
numbers.pop();

//3.
numbers.shift();

//4.
numbers.unshift();

//5.
numbers.concat();

//6.
numbers.slice();

//7.
numbers.sort((a, b) => a - b);

//8.
numbers.forEach(number => {
    console.log(number)
})

//9.
const double = numbers.map(number => number * 2);