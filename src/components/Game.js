import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compCard: "CompCard",
      playerCard: "playerCard",
    };
    this.compCards = [
      { range: 5, suit: "diamonds" },
      { range: 2, suit: "clubs" },
    ];
    this.playerCards = [
      { range: 8, suit: "diamonds" },
      { range: 10, suit: "clubs" },
    ];
    this.compWins = 0;
    this.playerWins = 0;
  }

  componentDidMount() {
    let deck = [];
    let suits = ["diamonds", "spades", "clubs", "hearts"];
    for (const suit of suits) {
      for (let j = 2; j <= 13; j++) {
        deck.push({ range: j, suit: suit });
      }
    }
  }

  handleClickNext = () => {
    if (this.compCards.length) {
      let compCard = this.compCards.pop();
      let playerCard = this.playerCards.pop();
      this.setState({
        compCard: `${compCard.range}, ${compCard.suit}`,
        playerCard: `${playerCard.range}, ${playerCard.suit}`,
      });
      if (compCard.range > playerCard.range) {
        this.compWins++;
      } else if (compCard.range < playerCard.range) {
        this.playerWins++;
      }
    } else {
      this.props.changePage("result", this.compWins, this.playerWins);
    }
  };

  render() {
    return (
      <div>
        <h1>Computer</h1>
        <h2>{this.state.compCard}</h2>
        <h2>{this.state.playerCard}</h2>
        <h1>{this.props.name}</h1>
        <button onClick={() => this.handleClickNext()}>Next</button>
      </div>
    );
  }
}

export default Game;
