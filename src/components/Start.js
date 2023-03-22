import React, { Component } from "react";

class Start extends Component {
  render() {
    return (
      <div>
        <h1>Ready to BUZZZ</h1>
        <input placeholder={"Enter your name"} type={"text"} />
        <button onClick={() => this.props.changePage("game")}>Start</button>
      </div>
    );
  }
}

export default Start;
