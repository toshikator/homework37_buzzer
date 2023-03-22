import React from "react";

const Result = (props) => {
  const getResult = () => {
    if (props.compWins > props.playerWins) {
      return "u looooose";
    } else if (props.compWins < props.playerWins) {
      return "u WIN!!";
    }
  };
  return (
    <div className={"playerForm"}>
      <h1 className={"readyForWar"}>Result</h1>
      <h2 className={"readyForWar small"}>
        Computer {props.compWins}:{props.playerWins} {props.name}
      </h2>
      {/*<p>{getResult()}</p>*/}
      <button
        className={"startButton"}
        onClick={() => props.changePage("game")}
      >
        Again
      </button>
      <p>{getResult()}</p>
    </div>
  );
};

export default Result;
