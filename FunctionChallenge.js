// const celsius = (fahr) => ((fahr - 32) * 5) / 9;
// const fahr = [50, 145, 122, 190, 850, 100000];
// fahr.forEach((n) => console.log(n + ' fahreihein =' + celsius(n)) + ' celsius');

const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const minMax = [min, max];
    return minMax;
};

const arr = [1, 2, 3, 4, 5];
console.log(minMax(arr));

((length, width) => {
    const output =
        `The area of a rectangle with a length of ${length} and a width of ${width} is ` +
        length * width;
    console.log(output);
})(10, 5);
