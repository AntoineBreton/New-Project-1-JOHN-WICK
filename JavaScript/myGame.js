// importing from other file
import cards from "./cards.js";
console.log(cards);

import Cardgame from "./myRulesGame.js";
console.log(Cardgame);

const cardGame = new Cardgame(cards);

// From Homepage to Gamepage

const gamePage = document.getElementById("Gamepage");

const homePage = document.getElementById("Homepage");

const enterButton = document.querySelector(".enter-button-homepage");

const startGameButton = document.querySelector(".start-game-button");

startGameButton.addEventListener("click", startgame);

// Global variables

let html = "";

let intervalId;

console.log(enterButton);
enterButton.addEventListener("click", (event) => {
  event.preventDefault();

  homePage.style.display = "none";
  gamePage.style.display = "block";
});

// Create an event by liking on mistery cards

// let html = "";

cardGame.cards.forEach((pic) => {
  html += `
      <div class='card' data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(Img/${pic.img}) no-repeat"></div>
      </div>
    `;

  document.querySelector("#cards-game").innerHTML = html;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("turned");
      cardGame.pickedCards.push(card);
      const refCard = document.querySelector("#card-reference img").dataset
        .cardName;
      if (cardGame.pickedCards.length === 1) {
        const nameOne = cardGame.pickedCards[0].dataset.cardName;
        console.log(nameOne);
        console.log(refCard);
        if (cardGame.checkIfPair(nameOne, refCard)) {
          console.log("You win");
          //pairsGuessed.innerText = cardGame.pairsGuessed;
        } else {
          setTimeout(() => {
            card.classList.remove("turned");
          }, 1200);
        }
      } else if (cardGame.pickedCards.length === 2) {
        const nameTwo = cardGame.pickedCards[1].dataset.cardName;
        console.log(nameTwo);
        console.log(refCard);
        if (cardGame.checkIfPair(nameTwo, refCard)) {
          console.log("You win");
          //pairsGuessed.innerText = cardGame.pairsGuessed;
        } else {
          setTimeout(() => {
            card.classList.remove("turned");
          }, 1200);
        }
      }
    });
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

// Pop-up "You lose" shows up when you lose

// Pop-up "You win" shows up when you win

// Agrandir mon titre h2 lorsque mon pointer passe dessus, puis le faire revenir à sa taille de base :

let homePageContextTitle = document.getElementById("game-context-homepage");

homePageContextTitle.addEventListener("mouseover", function () {
  homePageContextTitle.style.fontSize = "95px"; // Changer la taille de police à 24px
});

homePageContextTitle.addEventListener("mouseout", function () {
  homePageContextTitle.style.fontSize = "60px"; // Revenir à la taille de police initiale (16px) lorsque la souris quitte l'élément texte
});
