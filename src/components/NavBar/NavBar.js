import React, { useState } from 'react';
import { NavWrapper, Logo, MobileButton } from './NavBar.style'
import { DesktopNav, MobileNav } from './Naviagation'
import Burger from './Burger'

function NavBar(props){
  const [ menu, setMenu] = useState(false);
  return (
    <>
      <NavWrapper>

        <Logo to='/'>
          JC
        </Logo>

        <DesktopNav className='Desktop-nav'/>

        <MobileButton onClick={() => setMenu(!menu)}>
          <Burger  open={menu}/>
        </MobileButton>

        {menu && <MobileNav onClick={() => setMenu(!menu)}/>}
        
      </NavWrapper>
    </>
  );
}

export default NavBar;