import styled from 'styled-components'
import { colors } from '../../constant_styles'

export const MenuWrapper = styled.div`
  background-color: ${colors.purplegrey};
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 63px;
  z-index: -1;
  width: 180px;
  padding: 20px;
`; 

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${colors.offwhite};
  padding: 5px 5px;
  font-size: 16px;

  :hover {
		color: ${colors.black};
		cursor: pointer;
	}
`;