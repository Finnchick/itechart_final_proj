import React, { useState } from "react";
import "./css/Header.css";
//import BurgerButton from "./commonComponents/BurgerButton.jsx"
import BurgerButton from "./commonComponents/BurgerButton";
import Menu from "./Menu";


function Header() {
  const [buttonActive, setButtonActive] = useState(false);
  return (
    <div className="Header">
      <BurgerButton active={buttonActive} setActive={setButtonActive} />
      <Menu active={buttonActive}></Menu>
    </div>
  );
}

export default Header;