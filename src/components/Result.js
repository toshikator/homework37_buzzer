import React from "react";

const Result = (props) => {
  return (
    <div>
      <h1>Result</h1>
      <h2>Score 0:0</h2>
      <button onClick={() => props.changePage("game")}>Again</button>
    </div>
  );
};

export default Result;
