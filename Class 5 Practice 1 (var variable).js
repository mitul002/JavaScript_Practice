// JavaScript Variables
/*
 * JavaScript variable names are case-sensitive
 ! Variable names cannot contain spaces.
 * Variables cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, JavaScript variable names are written in camelCase.
 * Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).
 * You can not add number first
 * _, $ is acceptable but - not accaptable
 */



/* There Are 3 types of variable in Js :
    1. var
    2. let
    3. const
*/

//=================================================================================

/*
 Var Variable:
 * You can re declare
 * You can re assaign
 * Global Scooped
 * var is hosted
 */
 
 
 
 // We can reassign var valiable
var a = 10;
a = 20;
console.log(a);


// We can redeclare var valiable
var a = 'Bangladesh';
console.log(a);



//Global Scooped : we can access global variable from block. Also we can access a block from outside

{
  var blocked = '30';
  console.log(a);
  console.log(blocked);
}
console.log(blocked);



//var is hosted: If we input a value first but define the variable later, It will stay as undefined

var city1 = 'Dhaka';
console.log(city1);


console.log(city2);
var city2 = 'Sylhet';

