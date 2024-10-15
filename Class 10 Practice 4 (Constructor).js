function Person(first, last)
{
    this.firstname=first;
    this.lastname=last;
}

const Person1=new Person("John", "Doe");
const Person2=new Person("Dave", "Lee");
const Person3=new Person("Hasin","Mitul");
Person3.middle= "Almas";


console.log(Person1);
console.log(Person2);
console.log(Person3);

