console.log("Arithmemtic Operator")
//Arithmemtic Operator

let a = 50;
let b = 20;
let c = a % b;
let d = a/b;


console.log(c);
console.log(d);



let x = 10;
x = x + 1;
x++; // Increment
console.log(`Increment ${x}`);

let y = 20;
y = y - 1;
y--; // Decrement
console.log(`Decrement ${y}`);




//Comparison Operator
console.log("Comparison Operator")

let o ='5';
let p = 5;
let q = 10;
console.log(o == p); // equal to
console.log(o === p); // equal value and equal type
console.log(p !== q); //not equal value or not equal type
console.log(p > q); // Greater Than
console.log(p < q); // Less Than
console.log(p <= q); // Less then Equal to
console.log(p >= q); // Greater Than Equal to


//Logical Operator

console.log("Logical Operator")
/* 
&& AND Operator
|| OR Operator
! NOT Operator
*/ 

console.log(true && false)
console.log(true || false)
console.log(!true)


//Assignment Operator
console.log("Assignment Operator")

let j = 10;
let k = 20;
console.log(j = j + k);
console.log(j += k);


console.log(j = j - k);
console.log(j -= k);

console.log(j = j * k);
console.log(j *= k);

console.log(j = j / k);
console.log(j /= k);
console.log(j %= k);

console.log(5**2 );
console.log(j **= k);



//Ternary Operator
console.log(" Ternary Operator")

let t1 = j>k ?true:false;
console.log(t1)

let t2 = k>j ?true:false;
console.log(t2)


//Typeof 
console.log("typeof")

let name="john"
console.log(typeof(name))