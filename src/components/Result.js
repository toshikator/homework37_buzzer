import React from "react";

const Result = (props) => {
  const getResult = () => {
    if (props.compWins > props.playerWins) {
      return "u looooose";
    } else {
      return "u WIN!!";
    }
  };
  return (
    <div>
      <h1>Result</h1>
      <h2>
        Computer {props.compWins}:{props.playerWins} {props.name}
      </h2>
      <button onClick={() => props.changePage("game")}>Again</button>
      <p>{getResult()}</p>
    </div>
  );
};

export default Result;
