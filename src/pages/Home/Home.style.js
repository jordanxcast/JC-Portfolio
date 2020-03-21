import styled from 'styled-components'
import {colors} from '../../constant_styles'

export const PageWrapper = styled.div`
  background-color: ${props => props ? props.bgColor : colors.offwhite };
  margin: 0;
  padding: 30px;
  height: 100vh;
`;

export const Header = styled.header`
  background-color: ${props => props.bgColor ? props.bgColor : colors.darkgrey};
  box-shadow: ${props => props.boxShadow};
  width: fit-content;
  color: ${colors.offwhite};
  padding: ${({padding}) => padding ? padding : '5px 20px'};
  margin: ${props => props.margin ? props.margin: '0px'};
  font-size: 1.4em;
  font-weight: normal;
  line-height: 2em;
  margin-left: 20px;
  margin-right: 20px;
  z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
 

  @media (min-width: 700px) {
    margin: ${props => props.minMargin ? props.minMargin : props.margin};
    margin-left: 20px;
    
  }

  @media (min-width: 500px) {

  }
`;