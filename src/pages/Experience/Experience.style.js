import React, { useState } from "react";
// import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { colors } from "../../constant_styles";

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 30px 0px;
  width: 80%;
  max-width: 1000px;
  color: ${colors.teal};
  align-items: center;
  > h2 {
    text-align: center;
    color: ${colors.vermilion};
    margin: 20px auto;
  }
  .skills-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    justify-content: center;
  }
`;

export const Skill = styled.div`
  padding: 5px;
  margin: ${({ margin }) => (margin ? margin : "10px 10px 10px 0px")};
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
  align-items: center;
`;

export const ExperienceItemWrapper = styled.div`
  border: 1px solid ${colors.lightgrey};
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px auto 0px auto;
  color: ${colors.mint};
  justify-content: space-between;
  transition: all 600ms ease;

  .expanded {
    border-radius: 10px;
  }

  .details {
    display: flex;
    flex-direction: column;
    width: 80%;

    > div {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
  }

  @media (max-width: 500px) {
    .details {
      width: 100%;
      text-align: center;
    }
  }
`;

const Expand = styled.button`
  padding: 10px 20px;
  height: fit-content;
  background: transparent;
  align-self: flex-end;
  font-size: 14px;
  border: 1px solid ${colors.paleblue};
  color: ${colors.teal};
  margin: auto auto 20px;

  :hover {
    cursor: pointer;
    border-radius: 10px;
  }

  @media (min-width: 500px) {
    margin: auto 0px 20px auto;
  }
`;

const ExpandedSection = styled.ul`
  border-bottom: 1px dashed ${colors.teal};
  border-left: 1px dashed ${colors.teal};
  border-right: 1px dashed ${colors.teal};
  border-top: none;
  margin-top: 0px;
  padding: 20px;
  color: ${colors.mint};
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  > li {
    list-style: none;
    margin: 30px 0px;
  }

  @media (min-width: 900px) {
    > li {
      margin: 30px auto;
    }
  }
`;

const ExpItem = styled.div`
  width: 100%;
  max-width: 1000px;

  .item-expanded {
    border-bottom: 1px solid ${colors.slategrey};
    transition: all 200ms ease;
  }

  @media (min-width: 900px) {
    width: 80%;
  }

  .expanding-appear {
    opacity: 0;
    padding: 0px 20px;
    line-height: 0px;
    color: ${colors.teal};
  }
  .expanding-appear-active {
    opacity: 1;
    padding: 20px;
    line-height: 20px;
    transition: all 600ms linear;
  }
  .expanding-appear-done {
    color: ${colors.offwhite};
  }
  .collapsing-exit {
    opacity: 1;
    padding: 20px;
    font-size: 14px;
  }
  .collapsing-exit-active {
    opacity: 0.5;
    padding: 0px;
    font-size: 0px;
    transition: opacity 600ms;
  }

  .visible {
    visibility: visible;
    width: 100%;
    opacity: 1;
    max-width: 1000px;
    padding: 20px;
    line-height: 20px;
    font-size: 14px;
    transition: visibility 0s linear 0s, opacity 0.5s, line-height 200ms;

    /* for chrome and safari*/
    /* -webkit-animation-duration: 1s;
    -webkit-animation-name: slidein; */

    /*for firefox*/
    /* -moz-animation-duration: 1s;
    -moz-animation-name: slidein; */

    /* for opera*/
    /* -o-animation-duration: 1s;
    -o-animation-name: slidein; */

    /* Standard syntax*/
    /* animation-duration: 1s;
    animation-name: slidein; */

    @-webkit-keyframes slidedown {
      0% {
        opacity: 0;
        padding: 0px 20px;
        line-height: 0px;
        color: ${colors.teal};
      }

      100% {
        opacity: 1;
        padding: 20px;
        line-height: 20px;
      }
    }

    @keyframes slidedown {
      0% {
        opacity: 0;
        padding: 0px 20px;
        line-height: 0px;
        color: ${colors.teal};
      }

      100% {
        opacity: 1;
        padding: 20px;
        line-height: 20px;
      }
    }
  }

  .hidden {
    visibility: hidden;
    transition: visibility 0s linear 300ms, opacity 300ms, line-height 300ms;
    max-height: 0px;
    opacity: 0;
    border: none;
    /* padding: 0px 20px;*/
    line-height: 0px;
  }
`;

export const ExperienceItem = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <ExpItem>
      <ExperienceItemWrapper className={expand && "item-expanded"}>
        <div className="details">
          <div style={{ fontSize: "1.5em" }}>{props.company}</div>

          <div style={{ color: colors.paleblue }}>{props.position}</div>

          <div style={{ color: colors.teal }}>{props.duration}</div>
        </div>
        <Expand
          type="button"
          className={expand && "expanded"}
          onClick={() => setExpand(!expand)}
        >
          {expand ? "Less" : "More"}
        </Expand>
      </ExperienceItemWrapper>
      {/* {
        expand && ( */}
      {/* <CSSTransition
          in={expand}
            appear={expand}
            exit={!expand}
            onEnter={() => setExpand(true)}
            onExited={() => setExpand(false)}
            timeout={{ appear: 600, exit: 300 }}
            classNames={{
              exit: "collapsing-exit",
              exitActive: "collapsing-exit-active",
              exitDone: "collapsing-exit-done",
              appear: "expanding-appear",
              appearActive: "expanding-appear-active",
              appearDone: "expanding-appear-done",
            }}
            unmountOnExit
          > */}
      <ExpandedSection className={expand ? "visible" : "hidden"}>
        {props.expanded.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ExpandedSection>
      {/* ) // </CSSTransition> */}
    </ExpItem>
  );
};
