/* There Are 3 types of variable in Js :
    1. var
    2. let
    3. const
*/


/*
 * const Variable
 ! You can not re declare
 ! You can not re assaign
 ? Block Scooped
 ! const is not hosted
 */
 
 

 // We can't reassign const valiable
 const a = 10;
 a = 11; // this file won't run for this line
 
 
 //But we can change variable value in this way (By object):
 
 const person = {
   firstName: 'Ali',
   age: 30,
 };
 person.country = 'Bangladesh';
 person.age = 32;
 
 console.log(person);