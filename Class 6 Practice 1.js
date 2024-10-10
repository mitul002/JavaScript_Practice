const prompt = require('prompt-sync')();


// Prompt the user to enter two numbers
let num1 = prompt("Please enter number 1:");
let num2 = prompt("Please enter number 2:");

// Convert the input to numbers
let userNum1 = Number(num1);
let userNum2 = Number(num2);

// Calculate the sum
let sum = userNum1 + userNum2;

// Log the sum to the console
console.log("The sum is: " + sum);


if(sum%2==0)
{
    console.log("Sum of the numbers are even")
}
else
{
    console.log("Sum of the numbers are odd")
}