import styled from 'styled-components'
import {colors} from '../../constant_styles'

export const ProjectTitle = styled.h2`
  font-size: 1.8em;
  color: ${colors.black};
  letter-spacing: .01 em;
  font-weight: normal;
`;

export const ProjectImage = styled.img`
  border: 1px solid ${colors.black};
  width: 60%;
  height: 200px;
  margin: auto;
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
  color: ${colors.black}
`;

export const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  width: 50%;
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

