import React, { Component } from "react";

class Start extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div className={"playerForm"}>
        <h1>Ready to BUZZZ</h1>
        <input
          className={"playerName"}
          onChange={(event) => this.setState({ name: event.target.value })}
          placeholder={"Enter your name"}
          type={"text"}
        />
        <button
          className={"startButton"}
          onClick={() => this.props.changePage("game", this.state.name)}
        >
          Start
        </button>
      </div>
    );
  }
}

export default Start;
