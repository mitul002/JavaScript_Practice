fruits = ['Apple', 'Orange','Banana','Grape', true, 50]
console.log(fruits[0])
console.log(fruits[4])
console.log(fruits[5])
console.log(fruits.at(5))

//Update Value
fruits[5]=40
console.log(fruits[5])

//Add more element in array
fruits[10]='Date'


console.log(fruits)
console.log(fruits.length)


//Print last element
console.log(fruits[fruits.length -1])


// Print Array element like String
console.log(fruits.toString())

//Print Array elements with custom sign
console.log(fruits.join(" -😅- "))


//Delete last Item
fruits.pop()
console.log(fruits)

//Add Item at last 
fruits.push('Strawberry')
console.log(fruits)


//Add Item at first 
fruits.unshift('Mango')
console.log(fruits)

//Delete Item from first 
fruits.shift()
console.log(fruits)



