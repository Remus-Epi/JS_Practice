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
