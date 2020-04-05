import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../constant_styles'


const NavLinks = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  background: transparent;
  color: ${props => props.color ? props.color : colors.white};
  align-items: center;
  margin-right: 0px;
`;

const MenuLink = styled(Link)`
  color: ${props => props.color ? props.color : colors.offwhite};
  background: transparent;
  text-decoration: none;
  margin-right: 0px;
  font-size: 16px;
  margin-left: ${props => props ? props.marginLeft : '0px'};
  :hover{
    cursor: pointer;
    color: ${colors.purplegrey}
  }
`;

const Navigation = (props) => {
  return (
    <NavLinks direction={props.direction}>
      {/* <MenuLink className='nav-links' to='/'>
        Home
      </MenuLink> */}

      <MenuLink className='nav-links' to='/about'>
        About
      </MenuLink>

      <MenuLink className='nav-links' to='/projects'>
        Projects
      </MenuLink>

      <MenuLink className='nav-links' to='/experience'>
        Experience
      </MenuLink>

      <MenuLink className='nav-links' to='/contact'>
        Contact
      </MenuLink>
      
      <MenuLink className='nav-links'>
        Lifecycle
      </MenuLink>
    </NavLinks>
  )
}

const DesktopNavigation = styled.nav`
  display: none;
    
  @media screen and (min-width: 700px) {  
    display: flex;
    flex-direction: row;
    justify-self: flex-end;
    align-items: center;
    padding: 0;
    color: ${colors.white};

    .nav-links{
    margin-left: 20px;
    }
    .div {
    display:flex;
    flex-direction: row;
    }
  } 
`;

export const DesktopNav = (props) => {
  return (
    <DesktopNavigation>
      
      <Navigation direction='row' marginLeft='25px'/>

    </DesktopNavigation>
  )
}

const MobileNavigation = styled.nav`
  width: 100px;
  margin: 0px;
  padding: 10px 30px;
  background: ${colors.purplegrey};
  color: ${colors.darkgrey};
  align-self: flex-end;
  position: absolute;
  top: 64.5px;
  right: 0;

  .nav-links{
    margin: 5px 20px 5px 20px;
    }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const MobileNav = (props) => {
  return(
    <MobileNavigation>

      <Navigation direction='column' color={colors.darkgrey}/>

    </MobileNavigation>
  );
}