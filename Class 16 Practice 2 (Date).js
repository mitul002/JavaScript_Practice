function a()
{
    for( let i=0;i<100; i++)
    {
        if (i%2===0)
            console.log(i)
        
        
    }
}

let startTime = Date.now()
a()
let endTime = Date.now()

console.log(`Execution time ${endTime - startTime} millisecond`)