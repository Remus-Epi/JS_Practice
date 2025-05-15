// Reverse the letters of a string
const epi = 'Remus';
let letters = epi.split("").reverse().join('');
console.log(letters);


//Anagram Checker
function AnagramCheck(str1, str2) {
    if(str1.length !== str2.length) { 
        return false;
    }
    let count = str1.length 
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str1[i] === str2[j]){
                str2 = str2.slice(0, j) + str2.slice(j+1)    //eliminate string at position j
                continue;
            }
        }
    }
    if(str2.length === 0) 
        return true;
    else return false;
}

const str1 = 'rremuasdasr';
const str2 = 'saudmesrra';

console.log(AnagramCheck(str1, str2));


//Caesar Cipher
((shift, text) => {
    let result = '';
    for(i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        const shifed = code + shift;
        result += String.fromCharCode(shifed);  
    }
    console.log(result);
})(3, 'abcdef');


//Functional Calculator
((number) => {
    let period = 1;
    for(i = 1; i <= number; i++)
        period *= i;
    console.log(period);
})(5);


//Flatten Nested Array

(function nesting(input)  {
    nest = [];
    do {
        for(i = 0; i < input.length; i++) {
            if(input[i].length === 1) { 
                nest.push(input[i])
                input.shift();
            }
        }
    } while(input.length > 0);
})([1, [2, [3, 4]], 5]);