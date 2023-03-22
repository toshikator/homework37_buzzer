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
      <div>
        <h1>Ready to BUZZZ</h1>
        <input
          onChange={(event) => this.setState({ name: event.target.value })}
          placeholder={"Enter your name"}
          type={"text"}
        />
        <button onClick={() => this.props.changePage("game", this.state.name)}>
          Start
        </button>
      </div>
    );
  }
}

export default Start;
