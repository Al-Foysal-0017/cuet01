import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = ({ toggle = false }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {/* <NavLogo to="/" onClick={toggleHome}>
              Chittagong University of <br /> Engineering & Technology
            </NavLogo> */}
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                // background: "#000",
                // padding: "0 1rem",
              }}
              to="/"
            >
              <img
                // src="https://i1.sndcdn.com/artworks-000009967543-wpthe9-t500x500.jpg"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/CUET_Vector_ogo.svg/1200px-CUET_Vector_ogo.svg.png"
                alt=""
                width={65}
                height={80}
                // style={{
                //   position: "absolute",
                //   marginTop: "-28px",
                //   marginLeft: "-48px",
                // }}
              />
              {/* CUET */}

              <div
                style={{ color: "#fff", fontWeight: "600", marginLeft: "8px" }}
              >
                CUET | ALUMNI
                {/* Chittagong University of <br /> Engineering & Technology */}
              </div>
            </Link>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Message
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Upcoming
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Responsibility
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Grow
                </NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to="/">Sign In</NavBtnLink>
              <NavBtnLink style={{ marginLeft: "8px" }} to="/">
                Sign Up
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
