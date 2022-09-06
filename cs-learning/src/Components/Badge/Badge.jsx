import React, { Component } from "react";
import "./Badge.css";
export default class Badge extends Component {
  render() {
    return (
      <h5 className="badge"
        style={{
          backgroundColor: this.props.color || "#22C55E",
          color: this.props.text || "white",
          ...this.props.style
        }}
      >
        {this.props.children}
      </h5>
    );
  }
}
