import React, { Component } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: "start",
    };
  }

  changePage = (page) => {
    this.setState({ page });
  };

  componentDidMount() {
    this.changePage("start");
  }

  render() {
    switch (this.state.page) {
      case "game":
        return <Game changePage={this.changePage} />;
      case "result":
        return <Result changePage={this.changePage} />;
      default:
        return <Start changePage={this.changePage} />;
    }
  }
}

export default App;
