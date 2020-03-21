import React from 'react';
import { MenuWrapper, MenuLink } from './NavBar.style'

function Menu(props){
  return(
    <MenuWrapper>
      <MenuLink className='Menu-link' href='/'>
        Home
      </MenuLink>

      <MenuLink className='Menu-link' href='./about'>
        About
      </MenuLink>

      <MenuLink className='Menu-link' href='./projects'>
        Projects
      </MenuLink>

      <MenuLink className='Menu-link' href='./experience'>
        Experience
      </MenuLink>

      <MenuLink className='Menu-link' href='contact'>
        Contact
      </MenuLink>
      
      <MenuLink className='Menu-link'>
        Lifecycle
      </MenuLink>
    </MenuWrapper>
  );
}

export default Menu;