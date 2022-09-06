import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { ReactComponent as MenuIcon } from "../../Shared/Icons/menu-symbol-of-three-parallel-lines.svg";
import { ReactComponent as Profile } from "../../Shared/Icons/profile-about-mobile-ui.svg";
import { ReactComponent as Search } from "../../Shared/Icons/search-magnifier-mobile-ui.svg";
import NavItem, { DropDownMenu } from "../NavItem/NavItem";

export default class Nav extends Component {
  render() {
    return (
      <div>
        {/* Desktop view  */}
        <nav className="regular">
          <div className="mainLinks">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/">Test1</Link>
            <Link to="/dashboard">Test2</Link>
          </div>
          <div className="logo">
            <Link to="/login">
              <img
                id="logo"
                src={require("../../Shared/Icons/Temp_logo2.png")}
                alt=""
              />{" "}
              Logo
            </Link>
          </div>
          <div className="login_signup">
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </div>
        </nav>
        {/* Mobile view */}
        <nav className="mobile">
          <ul className="navbar-nav">
            {/* Logo on the left */}
            <Link id="logoMobile" to="/">
              <img src={require("../../Shared/Icons/Temp_logo2.png")} alt="" />{" "}
              Logo
            </Link>
            {/* Calls nav item component, pass navigate to select the place we want the icon to send us */}
            <NavItem icon={<Search></Search>}></NavItem>
            <NavItem navigate="profile" icon={<Profile></Profile>}></NavItem>
            <NavItem icon={<MenuIcon></MenuIcon>}>
              {/* If it has a drop down, dont put an navigate, it will bring a dropdown menu which can be selected on navitems */}
              <DropDownMenu></DropDownMenu>
            </NavItem>
          </ul>
        </nav>
      </div>
    );
  }
}
