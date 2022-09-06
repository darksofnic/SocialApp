import React, { Component } from "react";
import "./SignInWith.css";

export default class SignInWith extends Component {
  render() {
    return (
      <div className="signButtons">
        <button className="btn-google">
          <span>
            <img
              className="buttonIcon"
              src={require("../../Shared/Icons/Google_icon.png")}
              alt=""
            />
            Sign in with Google
          </span>
        </button>
        <button className="btn-facebook">
          <span>
            <img
              className="buttonIcon"
              src={require("../../Shared/Icons/Facebook_logo.png")}
              alt=""
            />
            Sign in with Facebook
          </span>
        </button>
        <button className="btn-apple">
          <span>
            <img
              className="buttonIcon"
              src={require("../../Shared/Icons/Apple_logo.png")}
              alt=""
            />
            Sign in with Apple
          </span>
        </button>
      </div>
    );
  }
}
