// importing from other file
import cards from "./cards.js";
console.log(cards);

import Cardgame from "./myRulesGame.js";
console.log(Cardgame);

const cardGame = new Cardgame(cards);
const startTimer = 1;
let time = startTimer * 30;

// From Homepage to Gamepage

const gamePage = document.getElementById("Gamepage");

const homePage = document.getElementById("Homepage");

const enterButton = document.querySelector(".enter-button-homepage");

// Lancer le jeu en cliquant sur le bouton "Start Game" (en appelant la fonction Startgame)
const startGameButton = document.querySelector(".start-game-button");
startGameButton.addEventListener("click", startgame);

// Global variables

let win = document.getElementById("pop-up-win");
let lose = document.getElementById("pop-up-lose");
let gameOver = document.getElementById("pop-up-gameover");

let html = "";

let intervalId;

window.addEventListener("load", newGame);
// From Homepage to Gamepage

function newGame() {
  enterButton.addEventListener("click", (event) => {
    if (!validateAge(event)) {
      return alert(
        `YOU MUST BE AT LEAST 18 YEARS OLD TO ENTER THE CASINO BRO !`
      );
    }
    event.preventDefault();
    homePage.style.display = "none";
    gamePage.style.display = "block";
    startGameButton.style.display = "block";
    time = 30;
    const minute = Math.floor(time / 60);
    let seconds = time % 60;
    countdownTimer.innerHTML = `0${minute}: ${seconds}`;
    document.querySelector("#cards-game").innerHTML = html;
    cardGame.pickedCards = [];
    html = "";
    cardGame.shuffleCards();
    newGame();
  });
}

// Retouner à la page d'accueil en cliquant sur le bouton de la pop-up WIN et GAMEOVER "Return homepage"

//const popUpWinButton = document.querySelector("#pop-up-win button");
win.addEventListener("close", (event) => {
  event.preventDefault();
  homePage.style.display = "block";
  gamePage.style.display = "none";
});

//const popUpGameOverButton = document.querySelector("#pop-up-gameover button");
gameOver.addEventListener("close", (event) => {
  event.preventDefault();
  homePage.style.display = "block";
  gamePage.style.display = "none";
});

// Set the timer (countdown) and Start game

function startgame() {
  startGameButton.style.display = "none";
  intervalId = setInterval(updateCountdown, 1000);
  function updateCountdown() {
    time--;
    const minute = Math.floor(time / 60);
    let seconds = time % 60;

    countdownTimer.innerHTML = `0${minute}: ${seconds}`;
    //console.log(time);

    if (time === 0) {
      clearInterval(intervalId);
      setTimeout(() => {
        gameOver.showModal();
      }, 1150);
    }
  }
  // Shuffle les cartes
  cardGame.shuffleCards();

  // Lancer la fonction play()

  play();

  function play() {
    cardGame.cards.forEach((pic) => {
      html += `
          <div class='card' data-card-name="${pic.name}">
            <div class="back" name="${pic.img}"></div>
            <div class="front ${pic.name}" style="background: url(Img/${pic.img}) no-repeat"></div>
          </div>
        `;

      // Create an event by liking on mistery cards

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
              setTimeout(() => {
                win.showModal();
              }, 1150);
              // console.log("You win");
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
              setTimeout(() => {
                win.showModal();
              }, 1150);

              // console.log("You win");
              clearInterval(intervalId);
              return;
              //pairsGuessed.innerText = cardGame.pairsGuessed;
            } else {
              setTimeout(() => {
                lose.showModal();
              }, 1150);
              // console.log("You lose");
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

function validateAge(event) {
  event.preventDefault(); // prevent form submission
  const birthday = new Date(
    document.querySelector(".birth-date-input-homepage").value
  );
  const ageDifference = Date.now() - birthday.getTime();
  console.log(birthday.getTime());
  const ageInYears = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365));
  const minAge = 18;
  console.log(ageInYears);
  if (ageInYears < minAge) {
    return false;
  } else {
    return true;
  }
}

// const form = document.querySelector(".enter-button-homepage");
// form.addEventListener("click", validateAge);

// From "return to Homepage" button to Homepage (when GAMEOVER)

// Audio sur la Pop-up "You lose"

// const winningAudio = document.querySelector("#pop-up-win audio");
// winningAudio.play();

// Agrandir mon titre h2 lorsque mon pointer passe dessus, puis le faire revenir à sa taille de base :

let extendHomePageContextTitle = document.getElementById(
  "game-context-homepage"
);

extendHomePageContextTitle.addEventListener("mouseover", function () {
  extendHomePageContextTitle.style.fontSize = "95px";
});

extendHomePageContextTitle.addEventListener("mouseout", function () {
  extendHomePageContextTitle.style.fontSize = "60px";
});

// Agrandir le bouton Start Game

startGameButton.addEventListener("mouseover", function () {
  startGameButton.style.fontSize = "70px";
});

startGameButton.addEventListener("mouseout", function () {
  startGameButton.style.fontSize = "35px";
});
