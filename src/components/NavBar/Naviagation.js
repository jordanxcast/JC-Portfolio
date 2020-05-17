import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constant_styles";

const NavLinks = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  background: transparent;
  color: ${(props) => (props.color ? props.color : colors.white)};
  align-items: center;
  margin-right: 0px;
`;

const MenuLink = styled(Link)`
  color: ${(props) => (props.color ? props.color : colors.offwhite)};
  background: transparent;
  text-decoration: none;
  margin-right: 0px;
  font-size: 16px;
  opacity: 1;
  margin-left: ${(props) => (props ? props.marginLeft : "0px")};
  :hover {
    cursor: pointer;
    color: ${colors.vermilion};
  }
  .active {
    color: ${colors.vermilion};
  }

  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
      margin: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
      margin: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
      margin: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
      margin: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const MobileNavigationLinks = (props) => {
  const { cb } = props;

  return (
    <NavLinks direction={props.direction}>
      {/* <MenuLink className='nav-links' to='/'>
        Home
      </MenuLink> */}

      <MenuLink className="nav-links active" to="/about" onClick={() => cb()}>
        About
      </MenuLink>

      <MenuLink
        className="nav-links active"
        to="/projects"
        onClick={() => cb()}
      >
        Projects
      </MenuLink>

      <MenuLink
        className="nav-links active"
        to="/experience"
        onClick={() => cb()}
      >
        Experience
      </MenuLink>

      <MenuLink className="nav-links active" to="/contact" onClick={() => cb()}>
        Contact
      </MenuLink>

      <MenuLink className="nav-links active" to="/blog" onClick={() => cb()}>
        Blog
      </MenuLink>
    </NavLinks>
  );
};

const Navigation = (props) => {
  // const { cb } = props;

  return (
    <NavLinks direction={props.direction}>
      <MenuLink className="nav-links active" to="/projects">
        Projects
      </MenuLink>

      <MenuLink className="nav-links active" to="/about">
        About
      </MenuLink>

      <MenuLink className="nav-links active" to="/experience">
        Experience
      </MenuLink>

      <MenuLink className="nav-links active" to="/contact">
        Contact
      </MenuLink>

      <MenuLink className="nav-links active" to="/blog">
        Blog
      </MenuLink>
    </NavLinks>
  );
};

const DesktopNavigation = styled.nav`
  display: none;

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-self: flex-end;
    align-items: center;
    padding: 0;
    color: ${colors.white};

    .nav-links {
      margin-left: 20px;
      a:active {
        color: ${colors.vermilion};
      }
    }
    .div {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const DesktopNav = (props) => {
  return (
    <DesktopNavigation>
      <Navigation direction="row" marginLeft="25px" />
    </DesktopNavigation>
  );
};

const MobileNavigation = styled.nav`
  background: ${colors.purplegrey};
  padding: 10px 30px;
  width: 150px;
  max-width: 150px;
  color: ${colors.darkgrey};
  position: fixed;
  top: 70px;
  right: 0;
  z-index: 11;

  .nav-links {
    margin: 5px 20px 5px 20px;

    :active {
      color: ${colors.vermilion};
    }
  }

  @media screen and (min-width: 700px) {
    display: none;
  }

  /* for chrome and safari*/
  -webkit-animation-duration: 1s;
  -webkit-animation-name: slidein;

  /*for firefox*/
  -moz-animation-duration: 1s;
  -moz-animation-name: slidein;

  /* for opera*/
  -o-animation-duration: 1s;
  -o-animation-name: slidein;

  /* Standard syntax*/
  animation-duration: 1s;
  animation-name: slidein;

  @-webkit-keyframes slidein {
    0% {
      padding: 0px;
      /* width: 0; */
      right: -150px;
      opacity: 0;
    }

    100% {
      padding: 10px 30px;
      /* width: 150px; */
      right: 0;
      opacity: 1;
    }
  }

  @keyframes slidein {
    0% {
      padding: 0px;
      /* width: 0; */
      right: -150px;
      opacity: 0;
    }

    100% {
      padding: 10px 30px;
      /* width: 150px; */
      right: 0;
      opacity: 1;
    }
  }
`;

export const MobileNav = (props) => {
  const { cb } = props;
  return (
    <MobileNavigation>
      <MobileNavigationLinks
        direction="column"
        color={colors.offwhite}
        cb={cb}
      />
    </MobileNavigation>
  );
};
