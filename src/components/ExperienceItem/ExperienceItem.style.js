import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ExperienceItemWrapper = styled.div`
  border: 1px solid ${colors.mint};
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto;
  color: ${colors.mint};

  > div {
    margin-bottom: 20px;
  }
`;
