const obj1=
{
    a: 1,
    b: 2,
    c: 3,
}

const obj2=
{
    i: 4,
    j: 5,
    k: 6,
}

const obj3=
{
    x: 7,
    y: 8,
    z: 9,
}

const marge={...obj1, ...obj2, ...obj3}
console.log(marge)

//Or,
const marge2= Object.assign({},obj1,obj2,obj3)
console.log(marge)


//Object inside object

const PhoneInfo ={

    brand:'Samsung',
    model: 's24 ultra',
    price: 110000,
 
    camera :
    {
    resolution: '100mp',
    sensor: 'samsung',
    }
}

console.log(PhoneInfo.camera.resolution)