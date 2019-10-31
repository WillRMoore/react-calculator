import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import math from "mathjs";
import Button from "./components/Button";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <Display data="3" />
        <Buttons>
          <Button label="C" value="clear" />
          <Button label="7" value="7" />
          <Button label="4" value="4" />
          <Button label="1" value="1" />
          <Button label="0" value="0" />

          <Button label="/" value="/" />
          <Button label="8" value="8" />
          <Button label="5" value="5" />
          <Button label="2" value="2" />
          <Button label="." value="." />

          <Button label="*" value="*" />
          <Button label="9" value="9" />
          <Button label="6" value="6" />
          <Button label="3" value="3" />
          <Button label=" " value="null" />

          <Button label="-" value="-" />
          <Button label="+" value="+" size="2" />
          <Button label="=" value="equal" size="2" />
        </Buttons>
      </div>
    </div>
  );
}

export default App;
