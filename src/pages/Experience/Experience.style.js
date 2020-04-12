import React from "react";
import styled from "styled-components";
import { colors } from "../../constant_styles";

export const Skills = styled.section`
  display: flex;
  margin: auto;
  width: 80%;
  color: ${colors.teal};

  .skills-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 700px) {
    flex-direction: column;
  }
`;

export const Skill = styled.div`
  padding: 5px;
  margin: 10px;
  width: fit-content;
  border: 1px solid ${colors.paleblue};
  color: ${colors.offwhite};
`;

export const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

export const ExperienceItemWrapper = styled.div`
  border: 1px solid ${colors.lightgrey};
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 20px auto;
  color: ${colors.mint};
  justify-content: space-between;

  .details {
    display: flex;
    flex-direction: column;
    width: 80%;

    > div {
      margin-bottom: 20px;
    }
  }
`;

const Expand = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  height: fit-content;

  background: transparent;
  align-self: flex-end;
  font-size: 14px;
  border: 1px solid ${colors.black};
  color: ${colors.mint};

  :hover {
    cursor: pointer;
    border: 1px solid ${colors.darkpurple};
    color: ${colors.lightgrey};
    background-color: ${colors.slategrey};
    opacity: 50%;
  }
`;

export const ExperienceItem = (props) => {
  return (
    <ExperienceItemWrapper>
      <div className="details">
        <div style={{ fontSize: "1.5em" }}>{props.company}</div>

        <div>{props.position}</div>

        <div style={{ color: colors.teal }}>{props.duration}</div>
      </div>
      <Expand type="button"> Expand</Expand>
    </ExperienceItemWrapper>
  );
};
