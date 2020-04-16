import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { colors } from "../../constant_styles";

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  color: ${colors.teal};

  .skills-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Skill = styled.div`
  padding: 5px;
  margin: ${({ margin }) => (margin ? margin : "10px")};
  width: fit-content;
  border: 1px solid ${colors.paleblue};
  color: ${({ color }) => (color ? color : colors.offwhite)};
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "auto")};
  opacity: 1;

  animation-name: fadein;
  animation-duration: 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  margin: 40px auto 0px auto;
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

const ExpandedSection = styled.ul`
  border-bottom: 1px dashed ${colors.teal};
  border-left: 1px dashed ${colors.teal};
  border-right: 1px dashed ${colors.teal};
  border-top: none;
  margin-top: 0px;
  padding: 20px;
  color: ${colors.offwhite};
  font-size: 14px;

  > li {
    list-style: none;
    margin: 10px 0px;
  }
`;

const ExpItem = styled.div`
  .expanding-appear {
    opacity: 0;
    padding: 0px 20px;
    font-size: 0px;
    color: ${colors.teal};
  }
  .expanding-appear-active {
    opacity: 1;
    padding: 20px;
    font-size: 14px;
    transition: all 600ms linear;
  }
  .expanding-appear-done {
    color: ${colors.offwhite};
  }
  .expanding-exit {
    opacity: 1;
    padding: 20px;
    font-size: 14px;
    transition: all 600ms linear;
  }
  .expanding-exit-active {
    opacity: 0;
    padding: 0px 20px;
    font-size: 0px;
    color: ${colors.teal};
    /* transition: all 600ms linear; */
  }
`;

export const ExperienceItem = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <ExpItem>
      <ExperienceItemWrapper>
        <div className="details">
          <div style={{ fontSize: "1.5em" }}>{props.company}</div>

          <div>{props.position}</div>

          <div style={{ color: colors.teal }}>{props.duration}</div>
        </div>
        <Expand type="button" onClick={() => setExpand(!expand)}>
          {expand ? "Less" : "More"}
        </Expand>
      </ExperienceItemWrapper>
      {expand && (
        <CSSTransition
          in={expand}
          appear={expand}
          exit={!expand}
          timeout={600}
          classNames="expanding"
          unmountOnExit
        >
          <ExpandedSection>
            {props.expanded.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ExpandedSection>
        </CSSTransition>
      )}
    </ExpItem>
  );
};
