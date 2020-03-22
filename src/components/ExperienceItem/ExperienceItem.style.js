import styled from 'styled-components';
import { colors } from '../../constant_styles'

export const ExperienceItemWrapper = styled.div`
  border: 1px solid ${colors.black};
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  margin: 20px 0px;

  > div {
    margin-bottom: 20px;
  }
`;