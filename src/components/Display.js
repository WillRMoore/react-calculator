import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  render() {
    var string = this.props.data.join("");

    return <div className="display">{string}</div>;
  }
}

export default Display;
