const PhoneInfo ={

    brand:'Samsung',
    model: 'ultra',
    price: 110000,

// Method
info: function()
    {
    return `The brand of the phone is ${this.brand} and model is ${this.model}`

    }   
}

console.log(PhoneInfo.info());

