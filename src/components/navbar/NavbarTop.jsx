import React from "react";
import { Link, NavLink } from "react-router-dom";
// import Container from "../container/Container"
import "./Navbar.css";

export const navRoutes = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Contact", route: "/contact" },
  { name: "Profile", route: "/profile" },
];
export const navRoutesRightSection = [
  { name: "Wallet", route: "/wallet" },
  { name: "Photo", route: "/photo" },
];

const NavbarTop = ({ showDropdown, setShowDropdown }) => {
  return (
    <div style={{ background: "", color: "#fff" }}>
      {/* If it has 3 sections */}
      {/* <Container className="Navbar"> */}
      <div className="Navbar">
        <ul className="NavbarContainer">
          {/* Left Section */}
          <div className="NavbarLeft">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/CUET_Vector_ogo.svg/1200px-CUET_Vector_ogo.svg.png"
                alt=""
                width={120}
                height={150}
                style={{ position: "absolute", top: "0", left: "0" }}
              />
            </Link>
          </div>
          {/* Center Section */}
          <div className="NavbarCenter">
            {navRoutes.map((item) => (
              <li key={item.name} className="NavLink">
                <NavLink
                  activeClassName="activeClassName"
                  exact
                  to={item.route}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </div>
          {/* Right Section */}
          <div className="NavbarRight">
            {navRoutesRightSection.map((item) => (
              <li key={item.name} className="NavLink">
                <NavLink
                  activeClassName="activeClassName"
                  exact
                  to={item.route}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </div>
          <div
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
            className="NavbarMenuBtn"
          >
            MENU
          </div>
        </ul>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* If it has 2 sections start*/}
      {/* --------------------------------------------------------------- */}
      {/* <Container className="Navbar">
        <ul className="NavbarContainer">
        
          <div className="NavbarLeft">LOGO</div>
          
          <div className="NavbarRight">  ------> Here, in CSS there should be .NavbarRight{width:"75%"} && .NavbarCenter{} should be removed
            {navRoutes.map((item) => (
              <li key={item.name} className="NavLink">
                <NavLink
                  activeClassName="activeClassName"
                  exact
                  to={item.route}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </div>
          <div
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
            className="NavbarMenuBtn"
          >
            MENU
          </div>
        </ul>
      </Container> */}
      {/* --------------------------------------------------------------- */}
      {/* If it has 2 sections finished*/}
      {/* --------------------------------------------------------------- */}
    </div>
  );
};

export default NavbarTop;
