// importing from other file
import cards from "./cards.js";
console.log(cards);

import Gameplay from "./myRulesGame.js";
console.log(Gameplay);

const gamePlay = new Gameplay(cards);

// From Homepage to Gamepage

const gamePage = document.getElementById("Gamepage");

const homePage = document.getElementById("Homepage");

const enterButton = document.querySelector(".enter-button-homepage");

const startGameButton = document.querySelector(".start-game-button");

startGameButton.addEventListener("click", startgame);

// Global variables
let intervalId;

console.log(enterButton);
enterButton.addEventListener("click", (event) => {
  event.preventDefault();

  homePage.style.display = "none";
  gamePage.style.display = "block";
});
`
`;
// Create an event by liking on mistery cards

// const clickedCards = document.querySelectorAll("#cards-game div");
// console.log(clickableCards);

// for (let i = 0; i < clickedCards.length; i++) {
//   clickedCards[i].addEventListener("click", () => {

document.querySelectorAll("#cards-game div").forEach((cards) => {
  cards.addEventListener("click", () => {
    cards.classList.add("turned");
    gamePlay.pickedCards.push(cards);
    if (gamePlay.pickedCards.length === 2) {
      const nameOne = gamePlay.pickedCards[0].dataset.cardName;
      const nameTwo = gamePlay.pickedCards[1].dataset.cardName;

      if (gamePlay.checkIfPair(nameOne, nameTwo)) {
        const pairsGuessed = document.querySelector("#pairs-guessed");
        pairsGuessed.innerText = gamePlay.pairsGuessed;
      } else {
        setTimeout(() => {
          firstCard.classList.remove("turned");
          secondCard.classList.remove("turned");
        }, 1000);
      }
      const pairsClicked = document.getElementById("pairs-clicked");
      pairsClicked.innerText = gamePlay.pairsClicked;
      gamePlay.pickedCards = [];
    }
    // console.log(cards);
  });
});

// Set the timer (countdown)

function startgame() {
  const startTimer = 1;
  let time = startTimer * 30;

  intervalId = setInterval(updateCountdown, 700);
  function updateCountdown() {
    time--;
    const minute = Math.floor(time / 60);
    let seconds = time % 60;

    countdownTimer.innerHTML = `0${minute}: ${seconds}`;
    console.log(time);

    if (time === 0) {
      clearInterval(intervalId);
    }
  }
}

const countdownTimer = document.getElementById("timer");

// Give authorisation to enter the game if age >= 18yo

// From "return to Homepage" button to Homepage (when GAMEOVER)

// Delay Pop-Up rules

// const delayPopUpRules = 1000;
// setTimeout(
//   "document.querySelector('.pop-up-rules').style.display='block'",
//   delayPopUpRules
// );
