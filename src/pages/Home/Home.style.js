import styled from 'styled-components'
import {colors} from '../../constant_styles'

export const Header = styled.div`
  color: ${colors.offwhite};
  margin: ${props => props.margin ? props.margin: '0px'};
  font-size: 1.2em;
  font-weight: 400;
  line-height: 2em;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
  height: 80%;
  align-content: center;
 
  > h1 {
    padding: ${({padding}) => padding ? padding : '20px 20px'};
    font-weight: 400;
    margin: 0px;
    .name {
      color: ${colors.mint}
    }
  }

  > h2 {
    padding: ${({padding}) => padding ? padding : '20px 20px'};
    margin: 0px;
    font-weight: 400;
  }
`;