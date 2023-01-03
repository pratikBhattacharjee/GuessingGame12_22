"use strict";

let correctNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".number").textContent = "?";
let highscore = 0;
//adding the check button event listener
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //When there is no number input
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === correctNumber) {
    //When the player wins
    document.querySelector(".message").textContent = "Correct Number!!";
    document.querySelector(".number").textContent = correctNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Change the style when correct number is selected
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > correctNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//adding the again button event listener
document.querySelector(".again").addEventListener("click", function () {
  //resetting the values
  correctNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  //resetting the input fields
  document.querySelector(".guess").value = "";
  //resetting the messages
  document.querySelector(".message").textContent = "Start guessing...";
  //Change the style
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
