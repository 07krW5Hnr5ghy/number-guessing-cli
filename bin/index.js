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

const main = () => {
    console.log(`Welcome to the Number Guessing Game!`);
    console.log(`I'm thinking of a number between 1 and 100.`);
    console.log(``);
    console.log(`Please select the difficulty level:`);
    console.log(`1. Easy (10 chances)`);
    console.log(`2. Medium (5 chances)`);
    console.log(`3. Hard (3 chances)`);
    console.log(``);
    let chances = null;
    const numberToGuess = randomIntFromInterval(1,10);
    rl.question(`Enter your choice: `,(choice)=>{
        console.log(`Your choice is :`,choice);
        if(choice===LEVELS.easy){
            console.log('Great! You have selected the easy difficulty level.');
            chances=10;
        }else if(choice===LEVELS.medium){
            console.log('Great! You have selected the medium difficulty level.');
            chances=5;
        }else if(choice===LEVELS.hard){
            console.log('Great! You have selected the hard difficulty level.');
            chances=3;
        }else{
            console.log('Please select between 1,2 and 3 choices');
        }
        console.log(`You have ${chances} for guess the number.`);
        console.log("Let's start the game!");
    });
    for(let i = 0;i<chances;i++){
        rl.question(`Enter your guess: `,(guess)=>{
            if(typeof(Number(guess))!=="number"){
                console.log(`guess ${guess} is not a number, please provide a number as guess`);
            }else{
                if(guess<numberToGuess){
                    console.log(`Incorrect! The number is less than ${guess}.`);
                }else if(guess>numberToGuess){
                    console.log(`Incorrect! The number is more than ${guess}.`);
                }else if(guess===numberToGuess){
                    console.log(`Congratulations! you guessed the correct number in ${chances-(i+1)} attempts.`);
                }
            }
            rl.close();
        });
    }
    //console.log(`Sorry you haven't guessed the number, end of the game.`);
}

main();