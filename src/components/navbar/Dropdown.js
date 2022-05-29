import React from "react";
import { Link } from "react-router-dom";
// import Container from '../container/Container';
import "./Dropdown.css";
import { navRoutes } from "./NavbarTop";
import { navRoutesRightSection } from "./NavbarTop";

const DropDown = ({ showDropdown, setShowDropdown }) => {
  return (
    <>
      <div
        className={!showDropdown ? "dropDown2" : "dropDown"}
        style={{ background: "greenyellow" }}
      >
        {/* <Container className="DropdownTop"> */}
        <div className="DropdownTop">
          <div className="DropdownTopItem">LOGO</div>
          <div
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
            className="DropdownTopItem"
          >
            XXX
          </div>
        </div>

        <ul className="DropdownLinksContainer">
          <div className="DropdownLinks">
            {navRoutes.map((item) => (
              <li key={item.name} className="DropdownLink">
                <Link to={item.route}>{item.name}</Link>
              </li>
            ))}
            {/* If there is also have the links of Navbar Right Section */}
            {navRoutesRightSection.map((item) => (
              <li key={item.name} className="DropdownLink">
                <Link to={item.route}>{item.name}</Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
