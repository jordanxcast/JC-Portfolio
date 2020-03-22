import styled from 'styled-components'
import { colors } from '../../constant_styles'


export const PageTitle = styled.h1`
  color: ${colors.grey};
  font-size: 30px;
  text-align: ${props => props.align};
  padding: 10px 10px 10px 0px;
  margin-top: 70px;
  font-weight: normal;
`;
