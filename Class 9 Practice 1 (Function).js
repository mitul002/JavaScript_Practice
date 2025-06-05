//Code Driven Function

function intro(name, age, gender="person")
{
    console.log(`Hello, I am ${name}, a ${age} years old ${gender}`)
}

intro("mitul",24 ,"boy")
intro("🌞xida", 23)


//Or,


let add = function(x,y)
{
    return x+y;
}
console.log(add(5,10))
console.log(add(4,6))


//Or,
//Arrow function:

let sub = (x,y) => x-y
console.log(sub(15,10))
console.log(add(4,6))


//Or,
let mul = (x,y) => {
    return(x*y);
}
console.log(mul(4,2))


