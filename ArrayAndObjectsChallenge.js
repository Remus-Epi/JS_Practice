const library = [
    {
        title: 'Game of Thrones',
        author: 'George RR Martyn',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Lord Of The Rings',
        author: 'J. R. R. Tolkien',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0]; //Destructure the title from the first book and rename the variable firstBook

const str = JSON.stringify(library);
console.log(str);


//Reduce method 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words = ['remus', 'simona', 'ruffy'];
const word = "banana";

const sum = numbers.reduce((acc,curr) => acc + curr, 0);
const max = numbers.reduce((acc, curr) => curr > acc ? curr : acc);
const multiply = numbers.reduce((acc, curr) => acc*curr, 1);
const longest_word = words.reduce((acc, curr) => curr.length > acc.length ? curr : acc)
const squareAndDouble = numbers.map((number) => Math.sqrt(number)*2);

console.log("SUM: " + sum);
console.log("MAX :" + max);
console.log("Multiply :" + multiply);
console.log("Longest word :" + longest_word);
console.log("Square and double :" + squareAndDouble);


