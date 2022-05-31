import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../container/Container";
// import Container from "../container/Container"
import "./Navbar.css";

export const navRoutes = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Contact", route: "/contact" },
  { name: "Profile", route: "/profile" },
];
export const navRoutesRightSection = [
  { name: "Sign in", route: "/login" },
  { name: "Sign up", route: "/register" },
];

const NavbarTop = ({ showDropdown, setShowDropdown }) => {
  const { pathname } = useLocation();
  return (
    <div>
      {/* If it has 3 sections */}
      {/* <Container className="Navbar"> */}
      <Container className="Navbar">
        <ul className="NavbarContainer">
          {/* Left Section */}
          <div className="NavbarLeft">
            <Link to="/">
              <img
                // src="https://i1.sndcdn.com/artworks-000009967543-wpthe9-t500x500.jpg"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/CUET_Vector_ogo.svg/1200px-CUET_Vector_ogo.svg.png"
                alt=""
                width={120}
                height={150}
                style={{
                  position: "absolute",
                  marginTop: "-28px",
                  marginLeft: "-48px",
                }}
              />
              {/* CUET */}
            </Link>
          </div>
          {/* Center Section */}
          <div className="NavbarCenter">
            {navRoutes.map((item) => (
              <li key={item.name} className="NavLink">
                <Link
                  style={{
                    borderBottom:
                      (pathname === "/" && item.name === "Home") ||
                      (pathname === "/about" && item.name === "About Us") ||
                      (pathname === "/contact" && item.name === "Contact") ||
                      (pathname === "/profile" && item.name === "Profile")
                        ? "3px solid green"
                        : "",
                  }}
                  className="NavLinkName"
                  to={item.route}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
          {/* Right Section */}
          <div className="NavbarRight">
            {navRoutesRightSection.map((item) => (
              <li key={item.name} className="NavLink">
                <Link className="NavLinkName" to={item.route}>
                  {item.name}
                </Link>
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
      </Container>

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
