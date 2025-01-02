//For Loop
color = ["red", "blue", "green", "yellow", "purple"];
for (let i=0;i<5;i++){
    console.log(color[i]);
}

console.log("===============================================");

// For in loop
let person = {
    name: "joe",
    id: 6658,
    phone: 90989,
    mail: "joe@mail.com"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


console.log("===============================================");

// For of loop
let fruits = ["apple", "orange", "mango", "banana", "grapes"];
for (let i of fruits) {
    console.log(i);
}

console.log("===============================================");

// For each loop
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
cars.forEach(function (i) {
    console.log(i);
});


