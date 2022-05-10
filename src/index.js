import React from "react";
import ReactDOM from "react-dom";

const fName = "Oluwaseun";
const lName = "Osunsola";
const num = 14;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}! </h1>
    <p>Your lucky number is {num} while,</p>
    <p> My lucky number is {Math.floor(Math.random() * 10 + 1)} </p>
  </div>,

  document.getElementById("root")
);
