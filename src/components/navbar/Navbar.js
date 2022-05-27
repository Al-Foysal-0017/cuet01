import React, { useState } from "react";
import Navbar from "./NavbarTop";
import DropDown from "./Dropdown";

const NavbarMain = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <DropDown showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
    </>
  );
};

export default NavbarMain;
