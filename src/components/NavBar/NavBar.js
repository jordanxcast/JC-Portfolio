import React, { useState } from "react";
import { NavWrapper, Logo, MobileButton } from "./NavBar.style";
import { DesktopNav, MobileNav } from "./Naviagation";
import Burger from "./Burger";

function NavBar(props) {
  const [menu, setMenu] = useState(false);
  const [logo, setLogo] = useState(false);

  function clickLogo() {
    let elm = document.getElementById("logo");
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
  }
  return (
    <>
      <NavWrapper>
        <Logo
          id="logo"
          to="/"
          className={logo ? "logo-set" : ""}
          onClick={() => clickLogo()}
        >
          JC
        </Logo>

        <DesktopNav className="Desktop-nav" />

        <MobileButton onClick={() => setMenu(!menu)}>
          <Burger open={menu} />
        </MobileButton>

        {menu && <MobileNav onClick={() => setMenu(!menu)} />}
      </NavWrapper>
    </>
  );
}

export default NavBar;
