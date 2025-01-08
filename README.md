# Number Guessing Game

A simple CLI-based number guessing game built using Node.js. The computer randomly selects a number between 1 and 100, and the user has to guess the number within a limited number of attempts. This game includes features like a timer and a hint system to make the gameplay more interactive and engaging.

## **Features**

- **Random Number Generation**: The game generates a random number between 1 and 100.
- **Difficulty Levels**: Choose from:
  - Easy (10 attempts)
  - Medium (5 attempts)
  - Hard (3 attempts)
- **Timer**: Tracks how long it takes the user to guess the number.
- **Hints**: Provides clues to assist the user, including whether the number is even/odd and its divisors.
- **Replay Option**: Play multiple rounds until you decide to quit.

---

## **How to Run**

1. **Prerequisites**:

   - Ensure you have [Node.js](https://nodejs.org/) installed on your system.

2. **Download/Clone the Repository**:

   ```bash
   git clone https://github.com/07krW5Hnr5ghy/number-guessing-cli
   cd number-guessing-cli
   ```

3. **Install/Run the game**

   ```bash
   npm install -g .
   number-guessing
   ```

## **How to Play**

1.  Start the game, and you'll see a welcome message along with difficulty options.
2.  Select a difficulty level:

    Easy: 10 chances
    Medium: 5 chances
    Hard: 3 chances

3.  The game begins, and you can:

    Enter a number to make a guess.
    Type hint for assistance if you're stuck.

4.  The game will:

    Inform you if the number is higher or lower than your guess.
    Congratulate you if you guess the correct number.
    End when you run out of attempts or guess the number.

5.  At the end of each round, decide if you'd like to play again.

## **Example**

    ```bash
    Welcome to the Number Guessing Game!
    I'm thinking of a number between 1 and 100.
    Select your difficulty level:
    1. Easy (10 chances)
    2. Medium (5 chances)
    3. Hard (3 chances)

    Enter your choice (1/2/3): 2
    You have 5 chances to guess the number.

    Enter your guess (or type 'hint' for a hint): hint
    Hint: The number is odd and divisible by 1, 7, 49.

    Enter your guess (or type 'hint' for a hint): 35
    Incorrect! The number is greater than your guess.

    Enter your guess (or type 'hint' for a hint): 50
    Incorrect! The number is less than your guess.

    Enter your guess (or type 'hint' for a hint): 49
    Congratulations! You guessed the correct number in 3 attempts.
    It took you 12.34 seconds.

    Do you want to play again? (yes/no): no
    Thanks for playing! Goodbye!
    ```

## **File Structur**

    number-guessing-cli/
    │
    ├── bin/index.js   # Main game file
    └── README.md      # Documentation

## project url

https://roadmap.sh/projects/number-guessing-game
