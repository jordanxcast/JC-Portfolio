import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { colors } from '../../constant_styles'

export const NavWrapper = styled.header`
  display: flex;
  flex-direction: row;
  height: 65px;
  width: -webkit-fill-available;
  padding: 20px 20px;
  justify-content: space-between;
  overflow: hidden;
  font-size: 1.2em;
  background-color: ${colors.black};
  color: ${colors.mint};
  /* box-shadow: 0px 4px 6px ${colors.slategrey}; */
`;

export const Logo = styled(Link)`
  padding: 0px;
  background: transparent;
  text-decoration: none;
  color: ${colors.mint}
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