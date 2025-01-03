function main(difficulty) {

    let randomNumber;
    let max_try;
    let ending_number;

    switch (difficulty) {

        case "easy":
            max_try = 5;
            ending_number = 10;
            randomNumber = Math.ceil(Math.random() *10);
            console.log(randomNumber);
            break;

        case "medium":
            max_try = 3;
            ending_number = 50;
            randomNumber = Math.ceil(Math.random() * 50);
            console.log(randomNumber);
            break; 

        case "hard":
            max_try = 2;
            ending_number = 100;
            randomNumber = Math.ceil(Math.random() * 100);
            console.log(randomNumber);
            break;

        default:
            console.log("Invalid Difficulty");
            break;
        }

    console.log(`You have ${max_try} chances to guess the number`);

    let won = false;
    for(let i=max_try; i>0; i--){
        let guess = prompt(`Guess the number between 1 to ${ending_number}. You have ${i} chances`);
        if(guess==randomNumber){
            console.log(`You won the game, you did it in ${max_try-i+1} chances`);
            won = true;
            break;
        }

        else if (guess>randomNumber){
            console.log("You guessed too high");
            }
        else if (guess<randomNumber){
            console.log("You guessed too low");
            }          
        }

        if(won!=true){
            console.log(`You lost the game, the actual number was ${randomNumber}`);
        }
}

let difficulty = prompt("Choose Game difficulty: Easy, Medium, Hard").toLowerCase();
console.log(difficulty);

main(difficulty);
