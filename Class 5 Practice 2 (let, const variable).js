/* There Are 3 types of variable in Js :
    1. var
    2. let
    3. const
*/



/*
 let Variable:
 * You can re assaign
 ! You can not re declare
 ? Block Scooped
 ! let is not hosted
 */



 // We can reassign let valiable
let a = 10;
a = 11;

console.log(a);


// We can't redeclare let valiable


let a = 'Bangladesh';
console.log(a);



//Block Scooped : we can access global variable from block. But can't access a block from outside

{
  let blocked = '30';
  console.log(a);
  console.log(blocked);
}
console.log(blocked);



//let is not hosted: If we input a value first but define the variable later, It will show error

let city1 = 'Dhaka';
console.log(city1);


console.log(city2);
let city2 = 'Sylhet';





/*
 * const Variable
 ! You can not re declare
 ! You can not re assaign
 ? Block Scooped
 ! const is not hosted
 */
 
 
 
 // We can't reassign const valiable
const a = 10;
a = 11;


//But we can change variable value in this way:

const person = {
  firstName: 'Ali',
  age: 30,
};
person.country = 'Bangladesh';
person.age = 32;

console.log(person);