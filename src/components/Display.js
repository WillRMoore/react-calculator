import React, { Component } from "react";
import "./Display.css";

// var string = this.props.data.join('');

class Display extends Component {
  render() {
    var string = this.props.data;

    return <div className="display">{string}</div>;
  }
}

export default Display;
