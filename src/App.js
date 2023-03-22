import React, { Component } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: "start",
      name: "Player",
      compWins: 0,
      playerWins: 0,
    };
  }

  changePage = (page, ...args) => {
    switch (args.length) {
      case 0:
        this.setState({ page });
        break;
      case 1:
        this.setState({ page: page, name: args[0] || this.state.name });
        break;
      case 2:
        this.setState({
          page: page,
          compWins: args.at(0),
          playerWins: args[1],
        });
        break;
    }
  };

  componentDidMount() {
    this.changePage("start");
  }

  render() {
    switch (this.state.page) {
      case "game":
        return <Game changePage={this.changePage} name={this.state.name} />;
      case "result":
        return (
          <Result
            changePage={this.changePage}
            name={this.state.name}
            playerWins={this.state.playerWins}
            compWins={this.state.compWins}
          />
        );
      default:
        return <Start changePage={this.changePage} name={this.state.name} />;
    }
  }
}

export default App;
