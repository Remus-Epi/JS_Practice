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