//Add all array at 1 array
fruit=['Mango', 'Banana', 'Lichi' ,'Jackfruit']
Veg =['Potato', 'Tomato', 'Carrot']
Meat=['Beef', 'Mutton', 'Chicken']

Food = fruit.concat(Veg,Meat)
console.log(Food)


//Add item between other item
fruit.splice(2,0 ,'Orange', 'Pear') //This line adds 'Orange' and 'Pear' at index 2 of the fruit array without removing any items. The 0 indicates that no items should be deleted.
console.log(fruit)

//Delete item between other item
fruit.splice(0,2) //This line removes 2 items starting from index 0 of the fruit array. The items at index 0 and 1 will be deleted.
console.log(fruit)
//2D Array

A=[[1,2,3],[4,5,6],[7,8,9]]
console.log(A)

//Convert 2d to 1D
console.log(A.flat())


//