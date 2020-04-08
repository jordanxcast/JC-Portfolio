import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ProjectTitle = styled.h2`
  font-size: 1.8em;
  color: ${colors.black};
  letter-spacing: 0.01 em;
  font-weight: normal;
  text-align: center;
`;

export const ProjectImage = styled.img`
  border: 1px solid ${colors.black};
  width: 500px;
  height: 200px;
  margin: auto;
  padding: 30px;
  background-color: ${colors.purplegrey};
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 38%;
  color: ${colors.black};
  padding: 0px 30px 0px 30px;
`;

export const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 0px 30px;
  width: 72%;
  text-align: left;
`;

export const ProjectLink = styled.a`
  margin-bottom: 10px;
  text-decoration: none;
  color: ${colors.black};
  :hover {
    color: ${colors.purplegrey};
    cursor: pointer;
  }
`;
