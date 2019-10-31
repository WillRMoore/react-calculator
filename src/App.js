import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import math from "mathjs";
import Button from "./components/Button";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <Buttons>
          <Button value="clear" />
          <Button value="7" />
          <Button value="4" />
          <Button value="1" />
          <Button value="0" />

          <Button value="/" />
          <Button value="8" />
          <Button value="5" />
          <Button value="2" />
          <Button value="." />

          <Button value="*" />
          <Button value="9" />
          <Button value="6" />
          <Button value="3" />
          <Button value="null" />

          <Button value="-" />
          <Button value="+" size="2" />
          <Button value="equal" size="2" />
        </Buttons>
      </div>
    </div>
  );
}

export default App;
