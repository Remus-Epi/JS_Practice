function calculator(a, b, operator) {
    if (operator == '+') return a + b;
    else if (operator == '-') return a - b;
    else if (operator == '*') return a * b;
    else if (operator == '/') return a / b;
    else if (operator == '&') return 'Error';
}

let a = calculator(5, 2, '+');
console.log(a);
a = calculator(5, 2, '-');
console.log(a);
a = calculator(5, 2, '*');
console.log(a);
a = calculator(5, 2, '/');
console.log(a);
a = calculator(5, 2, '&');
console.log(a);
