// JavaScript Data Types
/*
? JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol 
8. Object
*/



//String Data Type

/*
 * We can use single or double quotes
 * The sequence \'  inserts a single quote in a string
 */
console.log("This is 'EU'");
console.log('This is "EU"');
console.log('This is \'EU\'');

let name="James";
console.log(`He is ${name}`)
console.log(typeof(name))

//Number/Integer Data Type

/*
 * JavaScript has only one type of number
 */
let age1 = 35;
let age2 = 20.5;

console.log(age1 + age2);
console.log(age1 + age2 + name);
console.log(age1 + age2 + name + age1 + age2);

let a = 9999999999999999;
console.log(typeof(a));

//BigInt Data Type

/*
 ? BigInt
 * To create a BigInt, append n to the end of an integer or call BigInt()
 * BigInt can not mix with other data types
 * A BigInt can not have decimals
 */
let b = 9999999999999999n;
console.log(typeof(b));

let c = BigInt(1);

/*
let sum = a+c;
console.log(sum)

it is not possible
*/

let sum = b+c;
console.log(sum)





//Boolean Data Type

/*
 * Booleans can only have two values: true or false
 */
console.log(typeof(false));


// Undefined Data Type
let x
console.log(typeof(x));


//Null Data Type
let y= null
console.log(typeof(y));


//Array/Object Data Type

/*
 * JavaScript arrays are written with square brackets.
 * Array items are separated by commas.
 */
let fruits =['apple', 'banana', 'jackfruit', 'pear', 'grape']
console.log(typeof(fruits))
console.log(fruits)

fruits[2]='date';
console.log(fruits)

fruits[5]=['Orange'];
console.log(fruits)



//Object Data Type

/*
 * JavaScript objects are written with curly braces {}
 */

let studentInfo = {
    name: "jack",
    id: "123",
    age: 18
}

console.log(studentInfo);
console.log(typeof studentInfo);





