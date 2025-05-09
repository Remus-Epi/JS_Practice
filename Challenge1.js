function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

console.log(getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((n) => console.log(n));
