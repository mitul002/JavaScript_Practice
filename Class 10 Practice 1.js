//JavaScript Object
const PhoneInfo=
{
    Brand : `xiaomi`,
    Model: `Redmi Note 10 Pro`,
    Processor : `Snapdragon`,
    RAM : `8GB`,
    'No of Camera': 4,
    Megapixel: [`48mp`, `12mp`, `12mp` ],
    Telephoto_Lense: false,
}

console.log(PhoneInfo)


console.log(PhoneInfo.Brand)
//when the key name is not defined by a single word, we need to use bracket notation
console.log(PhoneInfo["No of Camera"]) 


console.log(PhoneInfo.Megapixel)
console.log(PhoneInfo.Telephoto_Lense)

//Upfate any value
PhoneInfo.model=`Redmi Note 11`;
console.log(PhoneInfo.model)


//Show keys only 
console.log(Object.keys(PhoneInfo))

//Show keys only 
console.log(Object.values(PhoneInfo))




