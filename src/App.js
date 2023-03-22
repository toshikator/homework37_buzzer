import React, { Component } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
import "./App.css";

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
      default:
        break;
    }
  };

  componentDidMount() {
    this.changePage("start");
  }

  render() {
    switch (this.state.page) {
      case "game":
        return (
          <div className={"field"}>
            <Game changePage={this.changePage} name={this.state.name} />
          </div>
        );
      case "result":
        return (
          <div className={"field"}>
            <Result
              changePage={this.changePage}
              name={this.state.name}
              playerWins={this.state.playerWins}
              compWins={this.state.compWins}
            />
          </div>
        );
      default:
        return (
          <div className={"field"}>
            <Start changePage={this.changePage} name={this.state.name} />;
          </div>
        );
    }
  }
}

export default App;
