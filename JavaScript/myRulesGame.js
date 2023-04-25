// 1. Cards rules

class Gameplay {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    this.timerIsOut = 0;
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }

  //   2. Timer rules

  timeIsOver() {}
}

// exporting Gameplay class
export default Gameplay;
