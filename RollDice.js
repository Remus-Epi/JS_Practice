function RollDice() {
    const arr = [];
    arr[0] = Math.floor(Math.random() * 7);
    arr[1] = Math.floor(Math.random() * 7);
    return arr;
}

console.log(RollDice());
