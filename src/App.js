import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { evaluate } from "mathjs";
import update from "immutability-helper";
import Button from "./components/Button";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      operations: []
    };
  }

  calculateOperations = () => {
    var result = this.state.operations.join("");

    if (result) {
      result = String(evaluate(result));
      this.setState({ operations: [result] });
    }
  };

  handleClick = e => {
    var value = e.target.getAttribute("data-value");

    console.log("clicked");
    console.log("e.target.getAttribute:", value);
    console.log("this.state.operations:", this.state.operations);

    switch (value) {
      case "clear":
        this.setState({ operations: [] });
        break;
      case "equal":
        this.calculateOperations();
        break;
      default:
        console.log("default switch activated");
        var newOperations = update(this.state.operations, {
          $push: [value]
        });
        this.setState({ operations: newOperations });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React Calculator</h1>
        <div className="calculator">
          <Display data={this.state.operations} />
          <Buttons>
            <Button handleClick={this.handleClick} label="C" value="clear" />
            <Button handleClick={this.handleClick} label="7" value="7" />
            <Button handleClick={this.handleClick} label="4" value="4" />
            <Button handleClick={this.handleClick} label="1" value="1" />
            <Button handleClick={this.handleClick} label="0" value="0" />

            <Button handleClick={this.handleClick} label="/" value="/" />
            <Button handleClick={this.handleClick} label="8" value="8" />
            <Button handleClick={this.handleClick} label="5" value="5" />
            <Button handleClick={this.handleClick} label="2" value="2" />
            <Button handleClick={this.handleClick} label="." value="." />

            <Button handleClick={this.handleClick} label="*" value="*" />
            <Button handleClick={this.handleClick} label="9" value="9" />
            <Button handleClick={this.handleClick} label="6" value="6" />
            <Button handleClick={this.handleClick} label="3" value="3" />
            <Button handleClick={this.handleClick} label=" " value="null" />

            <Button handleClick={this.handleClick} label="-" value="-" />
            <Button
              handleClick={this.handleClick}
              label="+"
              value="+"
              size="2"
            />
            <Button
              handleClick={this.handleClick}
              label="="
              value="equal"
              size="2"
            />
          </Buttons>
        </div>
      </div>
    );
  }
}

export default App;
