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

// helper functions
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

function getHint(targetNumber){
    const isEven = targetNumber % 2 === 0 ? "even" : "odd";
    const divisors = [];
    for(let i = 1;i <= Math.sqrt(targetNumber);i++){
        if(targetNumber%i===0){
            divisors.push(i,targetNumber/i);
        }
    }
    return `Hint: The number is ${isEven} and divisible by ${[...new Set(divisors)].join(", ")}.`;
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
        const startTime = Date.now();

        const guessNumber = () => {
            rl.question("Enter your guess (or type 'hint' for a hint): ",(input)=>{

                if(input.toLowerCase()==="hint"){
                    console.log(getHint(targetNumber));
                    return guessNumber();
                }
                
                attempts++;
                const userGuess = parseInt(input,10);

                if(isNaN(userGuess)||userGuess<1||userGuess>100){
                    console.log("Invalid input! Please enter a number between 1 and 100.");
                    attempts--;
                    return guessNumber();
                }

                if(userGuess===targetNumber){
                    const endTime = Date.now();
                    const duration = ((endTime-startTime)/1000).toFixed(2);
                    console.log(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                    console.log(`It took you ${duration} seconds.`);
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