import styled from 'styled-components'
import { colors } from '../../constant_styles'


export const AboutSelf = styled.img`
  border: 1px solid ${colors.black};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const AboutWrapper = styled.div`
  background-color: ${colors.black};
  padding: 30px;
  opacity: 80%;
  width: 80%;
  margin: 10px 20px;
`;