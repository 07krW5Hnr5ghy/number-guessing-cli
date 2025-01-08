#!/usr/bin/env node
const readline = require("readline");

let rl = readline.createInterface(
    process.stdin,process.stdout
);

const LEVELS = {
    easy:'1',
    medium:'2',
    hard:'3'
};

// helper function
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

const startGame = () => {
    console.log(`Welcome to the Number Guessing Game!`);
    console.log(`I'm thinking of a number between 1 and 100.`);
    console.log(``);
    console.log(`Please select the difficulty level:`);
    console.log(`1. Easy (10 chances)`);
    console.log(`2. Medium (5 chances)`);
    console.log(`3. Hard (3 chances)`);
    console.log(``);
    
    rl.question(`Enter your choice: `,(choice)=>{
        let maxAttempts = null;
        console.log(`Your choice is :`,choice);
        if(choice===LEVELS.easy){
            console.log('Great! You have selected the easy difficulty level.');
            maxAttempts=10;
        }else if(choice===LEVELS.medium){
            console.log('Great! You have selected the medium difficulty level.');
            maxAttempts=5;
        }else if(choice===LEVELS.hard){
            console.log('Great! You have selected the hard difficulty level.');
            maxAttempts=3;
        }else{
            console.log("Invalid choice! Defaulting to Medium difficulty (5 chances).");
            maxAttempts = 5;
        }

        console.log(`You have ${maxAttempts} for guess the number.`);
        console.log("Let's start the game!");

        const targetNumber = randomIntFromInterval(1,100);

        let attempts = 0;

        const guessNumber = () => {
            rl.question("Enter your guess: ",(guess)=>{
                attempts++;
                const userGuess = parseInt(guess,10);
                if(isNaN(userGuess)||userGuess<1||userGuess>100){
                    console.log("Invalid input! Please enter a number between 1 and 100.");
                    attempts--;
                    return guessNumber();
                }

                if(userGuess===targetNumber){
                    console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                    return playAgain();
                }else if(userGuess<targetNumber){
                    console.log("Incorrect! The number is greater than your guess.");
                }else{
                    console.log("Incorrect! The number is less than your guess.");
                }

                if(attempts>=maxAttempts){
                    console.log(`Game Over! You've used all your chances. The number was ${targetNumber}`);
                    return playAgain();
                }
                guessNumber();
            });
        };
        guessNumber();
    });
}

function playAgain(){
    rl.question("Do you want to play again? (yes/no): ", (answer)=>{
        if(answer.toLocaleLowerCase()==='yes'||answer.toLocaleLowerCase()==='y'){
            startGame();
        }else{
            console.log("Thanks for playing! GoodBye!");
            rl.close();
        }
    });
}

startGame();