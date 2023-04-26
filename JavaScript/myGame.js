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

let win = document.getElementById("pop-up-win");
let lose = document.getElementById("pop-up-lose");
let gameOver = document.getElementById("pop-up-gameover");

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

// Set the timer (countdown) and Start game

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

  cardGame.shuffleCards();
  play();
  function play() {
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
              win.showModal();
              console.log("You win");
              clearInterval(intervalId);

              //pairsGuessed.innerText = cardGame.pairsGuessed;
            } else {
              setTimeout(() => {
                card.classList.remove("turned");
              }, 1000);
            }
          } else if (cardGame.pickedCards.length === 2) {
            const nameTwo = cardGame.pickedCards[1].dataset.cardName;
            console.log(nameTwo);
            console.log(refCard);
            if (cardGame.checkIfPair(nameTwo, refCard)) {
              win.showModal();
              console.log("You win");
              clearInterval(intervalId);
              //pairsGuessed.innerText = cardGame.pairsGuessed;
            } else {
              lose.showModal();
              console.log("You lose");
            }
          }
        });
      });
    });
  }

  lose.addEventListener("close", () => {
    cardGame.shuffleCards();
    cardGame.pickedCards = [];
    html = "";
    play();
  });
}

const countdownTimer = document.getElementById("timer");

// Give authorisation to enter the game if age >= 18yo

// From "return to Homepage" button to Homepage (when GAMEOVER)

// Pop-up "You lose" shows up when you lose

// Pop-up "You win" shows up when you win

// Pop-up "Gameover" when time is over

// Agrandir mon titre h2 lorsque mon pointer passe dessus, puis le faire revenir à sa taille de base :

let extendHomePageContextTitle = document.getElementById(
  "game-context-homepage"
);

extendHomePageContextTitle.addEventListener("mouseover", function () {
  extendHomePageContextTitle.style.fontSize = "95px"; // Changer la taille de police à 24px
});

extendHomePageContextTitle.addEventListener("mouseout", function () {
  extendHomePageContextTitle.style.fontSize = "60px"; // Revenir à la taille de police initiale (16px) lorsque la souris quitte l'élément texte
});
