function outer(Name) 
{
    function inner()
    {
      console.log(`I am ${Name}`);
    }
    console.log('Hello,')
    return inner(); // inner output: Hello, I am matt
}
outer('matt');