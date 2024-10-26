const name="John Doe";
console.log(name)
const country ="Unitd States";
console.log(country)

const a ="He's 25 years old";
console.log(a)


const quote1= "1.Bill Gates said 'use AI as a tool.'"
console.log(quote1)

const quote2= '2. Bill Gates said "use AI as a tool."'
console.log(quote2)

const quote3= '3. Bill Gates said \'use AI as a tool.\''
console.log(quote3)


let full_name = "John " + "Doe"
console.log(full_name)

let info = name + " is from " + country
console.log(info)

let info2=`This is ${name} a citezen of ${country}  who is 
${20+5} years old`
console.log(info2)

document.getElementById('a').innerText=info2