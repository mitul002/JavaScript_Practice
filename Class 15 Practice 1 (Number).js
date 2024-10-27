const x1 = 999999999999999
console.log(x1)

const x2 = 9999999999999999
console.log(x2)
console.log(typeof(x2))

const a = 0.6
const b = 0.7
const sum=a+b
console.log(sum)
console.log(typeof(sum))

//To fix the floating digits
console.log(sum.toFixed(2))
console.log(typeof(sum.toFixed(2)))

/*When we use toFixed() function, the no. converts into string.
so we need to convert it again to number */
console.log(typeof(Number(sum.toFixed(2))))

const k="30"
const l= 20
const m= 10
console.log(l+m)
console.log(k+l+m)
console.log(typeof(k+l+m)) //As K is string It is converting all numbers to string

//By Converting l to number 
console.log(Number(k)+l+m)
console.log(typeof(Number(k)+l+m))

//For -,*,/ js autometically converts the strings to number 

console.log(k-l)
console.log(k/l)
console.log(k*l)


//convert to binary
console.log(m.toString(2))
console.log(typeof(m.toString(2)))

//convert to octal
console.log(m.toString(8))

//convert to Hexa
console.log(m.toString(16))



const g=300
console.log(typeof(g))

const h = new Number(300)
console.log(typeof(h))

console.log(g==h)
console.log(g===h)

//Convert any number in 2 digit number !!Not Recomended to use
console.log(g.toPrecision(2))


// Js Number properties
let newNum = Number.EPSILON;
newNum = Number.MAX_VALUE;
newNum = Number.MIN_VALUE;
newNum = Number.POSITIVE_INFINITY;
newNum = Number.NEGATIVE_INFINITY;
newNum = Number.NaN;
console.log(newNum);

