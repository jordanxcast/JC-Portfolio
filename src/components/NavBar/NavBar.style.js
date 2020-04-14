import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../constant_styles";

export const NavWrapper = styled.header`
  display: flex;
  flex-direction: row;
  height: 70px;
  width: -webkit-fill-available;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  font-size: 1.2em;
  background-color: ${colors.black};
  color: ${colors.mint};
  /* box-shadow: 0px 4px 6px ${colors.slategrey}; */
`;

export const Logo = styled(Link)`
  padding: 3px 10px;
  background: transparent;
  text-decoration: none;
  color: ${colors.mint};
  display: flex;
  align-content: center;
  @keyframes bg {
    0% {
      background-size: 0 1px, 1px 0, 0 1px, 1px 0;
    }
    25% {
      background-size: 100% 1px, 1px 0, 0 1px, 1px 0;
    }
    50% {
      background-size: 100% 1px, 1px 100%, 0 1px, 1px 0;
    }
    75% {
      background-size: 100% 1px, 1px 100%, 100% 1px, 1px 0;
    }
    100% {
      background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
    }
  }

  background-repeat: no-repeat;
  background-image: linear-gradient(to right, #c9c9c9 100%, #c9c9c9 100%),
    linear-gradient(to bottom, #c9c9c9 100%, #c9c9c9 100%),
    linear-gradient(to right, #c9c9c9 100%, #c9c9c9 100%),
    linear-gradient(to bottom, #c9c9c9 100%, #c9c9c9 100%);
  background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  animation: bg 1.25s cubic-bezier(0.19, 1, 0.22, 1) 1;

  .logo-set {
    @keyframes bg {
      0% {
        background-size: 0 1px, 1px 0, 0 1px, 1px 0;
      }
      25% {
        background-size: 100% 1px, 1px 0, 0 1px, 1px 0;
      }
      50% {
        background-size: 100% 1px, 1px 100%, 0 1px, 1px 0;
      }
      75% {
        background-size: 100% 1px, 1px 100%, 100% 1px, 1px 0;
      }
      100% {
        background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
      }
    }

    background-repeat: no-repeat;
    background-image: linear-gradient(to right, #c9c9c9 100%, #c9c9c9 100%),
      linear-gradient(to bottom, #c9c9c9 100%, #c9c9c9 100%),
      linear-gradient(to right, #c9c9c9 100%, #c9c9c9 100%),
      linear-gradient(to bottom, #c9c9c9 100%, #c9c9c9 100%);
    background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    animation: bg 1.25s cubic-bezier(0.19, 1, 0.22, 1) 1;
  }
`;

export const MobileButton = styled.div`
  background: transparent;
  border: none;
  display: none;
  justify-content: center;
  align-content: center;
  margin: 0;

  @media screen and (max-width: 700px) {
    display: block;
  }

  :hover {
    cursor: pointer;
  }
`;
