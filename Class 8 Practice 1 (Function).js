//Code Driven Function

function intro(name, age, gender="person")
{
    console.log(`Hello, I am ${name}, a ${age} years old ${gender}`)
}

intro("mitul",24)
intro("sanjida", 23, "girl")


//Or,


let add = function(x,y)
{
    return x+y;
}
console.log(add(5,10))
console.log(add(4,6))