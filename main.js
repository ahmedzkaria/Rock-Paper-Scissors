"use strict";

// // Computer
// const getComputerChoice = function (array) {
//   const randomPlays = array[Math.floor(Math.random() * array.length)];
//   return randomPlays;
// };
// const playChoices = ["Rock", "Paper", "Scissors"];
// const compRandomChoice = getComputerChoice(playChoices);
// console.log(compRandomChoice);

// Game

// keeping a score:means to save it somewhere outside:
let playerScore = 0;
let computerScore = 0;

const playRoundResult = function (playerSelection, compSelection) {
  //   const newCapChoice = [];

  const playerSelectionLowCa = playerSelection.toLowerCase();
  //   console.log(playerSelectionLowCa);

  //> No need to split the name,just convert .
  //> Another way is just replace the first letter with the one upperCase 'instead of toUp.... + slice '

  //   const playerSelectionUpca = newCapChoice.push(
  //     playerSelectionLowCa.replace(
  //       playerSelectionLowCa[0],
  //       playerSelectionLowCa[0].toUpperCase()
  //     )
  //   );
  // You can use .map()

  const playerSelectionLowCaSp = playerSelectionLowCa.split("");
  const playerSelectionUpcaMap = playerSelectionLowCaSp.map((letter) => {
    letter[0].toUpperCase();
  }); // you cannot do '(letter) =>letter[0].toUpperCase()' bec now it still didNOT produce the array.

  //   console.log(playerSelectionUpcaMap);
  // ,newCapChoice);

  // MUST CONVERT ARRAY TO STRING
  const newCapChoiceStr = playerSelectionUpcaMap.join("");

  console.log(newCapChoiceStr);

  //   if (compSelection === "Paper" && newCapChoiceStr === "Rock") {
  //     computerScore++;

  //     return `You lose! ${compSelection} beats ${newCapChoiceStr}`;
  //   } else if (compSelection === "Rock" && newCapChoiceStr === "Scissors") {
  //     computerScore++;

  //     return `You lose! ${compSelection} beats ${newCapChoiceStr}`;
  //   } else if (compSelection === "Scissors" && newCapChoiceStr === "Paper") {
  //     computerScore++;

  //     return `You lose! ${compSelection} beats ${newCapChoiceStr}`;
  if (
    (compSelection === "Paper" && newCapChoiceStr === "Rock") ||
    (compSelection === "Rock" && newCapChoiceStr === "Scissors") ||
    (compSelection === "Scissors" && newCapChoiceStr === "Paper")
  ) {
    computerScore++;
    return `You lose! ${compSelection} beats ${newCapChoiceStr}`;
  } else if (compSelection === newCapChoiceStr) {
    return `A Tie.`;
  } else {
    playerScore++;
    return "You win!";
  }
};

// console.log(playRoundResult(playerChoice, compRandomChoice
// ));

const game = function () {
  for (let i = 1; i <= 5; i++) {
    // player
    const playerChoice = prompt("Put your choice here!");

    // computer
    const getComputerChoice = function (array) {
      const randomPlays = array[Math.floor(Math.random() * array.length)];
      return randomPlays;
    };
    const playChoices = ["Rock", "Paper", "Scissors"];

    const compRandomChoice = getComputerChoice(playChoices);
    console.log(compRandomChoice);

    // if you just call the function,it will access the 2 arguments only once. To make it ask each time for both playerChoice, compRandomChoice; you should call both functions here.'the 2 arguments are both functions which have been called ONCE OUTSIDE'

    console.log(playRoundResult(playerChoice, compRandomChoice));
  }

  console.log(`Final Result: You ${playerScore} : ${computerScore} Computer`);
};

game(); //this will not produce a value,so you should not log it to console
// console.log(game(playRound(playerChoice, randomComp)));
