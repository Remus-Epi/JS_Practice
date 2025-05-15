const peoples = [ 
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '3254264322',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane542@gmail.com',
        phone: '325537535435',
        age: 25,
    },
    {
        firstName: 'Bon',
        lastName: 'Foe',
        email: 'foebon@gmail.com',
        phone: '35245242331',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'soe',
        email: 'soiei@gmail.com',
        phone: '4365364352',
        age: 17,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'josekae@gmail.com',
        phone: '623643435',
        age: 26,
    },
];


// const youngPeople = peoples.map((person) => {
//     if(person.age <= 25) 
//         return  {
//             name: person.firstName + " " +  person.lastName,
//             email: person.email,
//             }
// });

// const youngPeople = peoples.filter((person) => person.age <= 25).map((person) => { 
//     return {
//         name: person.firstName + " " +  person.lastName,
//         email: person.email,
//     }
// });

//Challenge2:

// const numbers = [2, -30, 50, 20, -12, -9, 7];
// const positiveSum = numbers.filter((number) => number > 0).reduce((acc, curr) => acc = acc + curr,0);
// console.log(positiveSum);

const words = ['coder', 'remus', 'simona'];
const capitalized = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
});
console.log(capitalized)