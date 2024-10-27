const mydate = new Date()
console.log(mydate)
console.log(typeof (mydate))

console.log(mydate.toString())
console.log(typeof (mydate.toString()))


console.log(mydate.toDateString())

console.log(
    mydate.toLocaleDateString('default', 
        {weekday:'long'}
    ))

console.log(
    mydate.toLocaleDateString('default', 
        {weekday:'short'}
    ))



let mydate2 = new Date(2024, 4, 1)
console.log(mydate2.toString())

let mydate3 = new Date(2024, 4, 1, 23, 35,45)
console.log(mydate3.toString())

let mydate4 = new Date('5-5-2000')
console.log(mydate4.toString())


console.log(mydate.getTime())
console.log(mydate.getDate())
console.log(mydate.getDay())
