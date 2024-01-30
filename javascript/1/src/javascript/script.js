let a = 5;
let b = 10;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);


let input1 = prompt('Enter first number:');
let input2 = prompt('Enter second number:');

let number1 = parseInt(input1);
let number2 = parseInt(input2);


if (!isNaN(number1) && !isNaN(number2)) {

    let sum = number1 + number2;
    console.log(`Sum of entered numbers: ${sum}`);
} else {
    console.log('Please enter two valid numbers.');
}

