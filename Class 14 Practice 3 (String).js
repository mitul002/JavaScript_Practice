let name ="John Doe"
console.log(name.length)

console.log(name.charAt(1))
console.log(name.charAt(3))

console.log(name.indexOf("e"))
console.log(name.indexOf("o"))

console.log(name.toUpperCase())
console.log(name.toLowerCase())

console.log(name.slice(3))
console.log(name.slice(-3))
console.log(name.slice(3,7))

console.log(name.slice(4,1))
console.log(name.substring(4,1))

//Convert String to Array

console.log(name.split())
console.log(name.split(" "))
console.log(name.split(""))


//Trim Removes Spaces

let txt ="              hello            "
console.log(txt)
console.log(txt.trim())
console.log(txt.trimStart())
console.log(txt.trimEnd())

let url= "https://www.bing.com/search?App.exe%20HP"
console.log(url.replace("%20", "-"))