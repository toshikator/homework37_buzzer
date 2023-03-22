import React, { Component } from "react";

class Game extends Component {
  render() {
    return (
      <div>
        <h1>Computer</h1>
        <h2>CompCard</h2>
        <h2>PlayerCard</h2>
        <h1>Player</h1>
        <button onClick={() => this.props.changePage("result")}>Next</button>
      </div>
    );
  }
}

export default Game;
