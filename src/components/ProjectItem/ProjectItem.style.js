import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ProjectItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: auto;

  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: 750px) {
    width: 70%;
  }

  @media (min-width: 900px) {
    width: 60%;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.8em;
  color: ${colors.deeppurple};
  letter-spacing: 0.01 em;
  font-weight: normal;
  text-align: center;
`;

export const ProjectImage = styled.img`
  border: 1px solid ${colors.black};
  height: 200px;
  padding: 30px;
  width: 100%;
  background-color: ${colors.purplegrey};
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 30%;
  color: ${colors.deeppurple};
  padding: 0px 20px 0px 5px;
`;

export const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 30px;
  width: 70%;
  text-align: left;
`;

export const ProjectLink = styled.a`
  margin-bottom: 10px;
  text-decoration: none;
  color: ${colors.black};
  :hover {
    color: ${colors.deeppurple};
    cursor: pointer;
  }
`;
