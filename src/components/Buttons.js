import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  render() {
    return <div className="buttons">{this.props.children}</div>;
  }
}

export default Buttons;
