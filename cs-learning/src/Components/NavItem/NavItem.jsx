import React, { useState } from "react";
import "./NavItem.css";
import { ReactComponent as Search } from "../../Shared/Icons/search-magnifier-mobile-ui.svg";
import { CSSTransition } from "react-transition-group";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// sets the nav items with the information from the page being called
export default function NavItem(props) {
  const [open, setOpen] = useState();

  return (
    <li className="nav-item">
      <a
        href={props.navigate}
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {props.icon}
      </a>
      {/* if clicked and has childrem (Dropdownmenu) */}
      {open && props.children}
    </li>
  );
}

export function DropDownMenu() {
  // If the user clicked icon to open dropdown
  const [activeMenu, setActiveMenu] = useState("main");
  // checks the hieght of dropdown
  const [menuHeight, setMenuHeight] = useState(null);

  // cal the heights and sets it
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      // each item of the drop down
      <a
        href={props.navigate}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {/* icon-button is the left icon/while the children is the text/and icon right is the right icon */}
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    // calls menuHeight
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        // active menu is the name of the menu, if we want to switch from one another
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          {/* calling the items of the dropdown, passing navigation or icons if needed */}
          <DropDownItem navigate="/" leftIcon={<Search></Search>}>
            Profile
          </DropDownItem>
          <DropDownItem
            goToMenu="settings"
            rightIcon={<FaAngleRight></FaAngleRight>}
          >
            Settings
          </DropDownItem>
          <DropDownItem navigate="login">Log Out</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        // active menu is the name of the settings, if we want to switch from one another
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          {/* calling the items of the dropdown, passing navigation or icons if needed */}
          <DropDownItem leftIcon={<Search></Search>}>Profile</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem goToMenu="main" leftIcon={<FaAngleLeft></FaAngleLeft>}>
            Go back
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
