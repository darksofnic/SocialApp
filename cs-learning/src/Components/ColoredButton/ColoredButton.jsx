import React, { Component } from "react";
import "./ColoredButton.css";

export default class ColoredButton extends Component {
  render() {
    return (
      <button className="coloredButton"
        style={{
          backgroundColor: this.props.background || "white",
          color: this.props.text || "black",
          ...this.props.style,
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
