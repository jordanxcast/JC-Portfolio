import styled from 'styled-components'
import { colors } from '../../constant_styles'


export const PageTitle = styled.header`
  color: ${colors.grey};
  font-size: 30px;
  text-align: ${props => props.align};
  padding: 10px;
  margin-top: 70px;
`;
