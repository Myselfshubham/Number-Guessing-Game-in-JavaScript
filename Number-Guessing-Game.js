// Generate random number here
// Keep asking for the number until the correct number is guessed
// Increment the chances variable
// Eventually after the game is over, display the (100 - Number of chances) and the actual number

let prompt = require("prompt-sync")();
console.log("===Number Guessing Game===");
console.log("Rules for the games:-");
console.log(
  "Keep enter the number between 1 to 100 and ",
  "\n",
  "check what's you got as result and try again following the result.",
  "\n",
  "===================================================",
  "\n"
);
let guessedNum = Math.floor(Math.random() * 100) + 1;
let numberOfGuess = 0;
while (true) {
  let enteredNum = Number.parseInt(prompt("Enter the number: "));
  numberOfGuess++;
  if (enteredNum == guessedNum) {
    console.log(
      "Wooo!!! Your guess was correct, You made it dude:)",
      "\n",
      "Number of guess Taken -> ",
      numberOfGuess,
      "\n",
      "Points earned -> " + (100 - numberOfGuess),
      "\n",
      "===================================================",
      "\n"
    );
    break;
  } else if (enteredNum > guessedNum) {
    console.log(
      "Entered number is Greater than the Guessed Number.",
      "\n",
      "Please try again!!!",
      "\n",
      "===================================================",
      "\n"
    );
  } else {
    console.log(
      "Entered number is Less than the Guessed Number.",
      "\n",
      "Please try again!!!",
      "\n",
      "===================================================",
      "\n"
    );
  }
}
