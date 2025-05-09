function getRandom14to100() {
    return Math.floor(Math.random() * 87 + 14);
}

let a = getRandom14to100();
console.log(a);
while (a != 13) {
    a = getRandom14to100();
    console.log(a);
}
