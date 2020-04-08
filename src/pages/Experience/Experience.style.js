import styled from "styled-components";
import { colors } from "../../constant_styles";

export const Skills = styled.section`
  display: flex;
  margin: auto;
  width: 80%;
  color: ${colors.offwhite};
  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

export const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
