import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ProjectItemWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 50px auto 0px;
  /* border: 2px solid ${colors.black}; */
  padding: 50px 100px;
  background-color: ${colors.offwhite};

  .tech-wrapper {
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
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.8em;
  color: ${colors.deeppurple};
  letter-spacing: 0.01 em;
  font-weight: normal;
  text-align: center;
  margin: 10px auto 40px auto;
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

export const ProjectImage = styled.img`
  border: 1px solid ${colors.black};
  height: auto;
  padding: 5px;
  max-width: 100%;
  background-color: ${colors.offwhite};
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 20%;
  color: ${colors.darkpurple};
  padding: 0px;
  font-size: 14px;
  .tech {
    justify-content: flex-end;
    margin-bottom: 10px;

    > p {
      margin: 0px;
    }
  }

  .skills {
    justify-content: flex-end;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
  }
  .tech-btn {
    background: transparent;
    -moz-transition: all 0.25s linear;
    -webkit-transition: all 0.25s linear;
    transition: all 0.25s linear;
    :hover {
      cursor: pointer;
      color: ${colors.mint};
    }
  }
  .tech-btn.closed {
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  @media (min-width: 900px) {
    width: 30%;
  }
`;

export const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5px 0px 30px;
  width: 80%;
  text-align: left;
  font-size: 14px;

  @media (min-width: 1000px) {
    width: 70%;
  }

  .description {
    color: ${colors.outerspace};
    width: 100%;
    margin: 0px 0px 5px 0px;
    > span {
      color: ${colors.outerspace};
    }
  }
`;

export const ProjectLink = styled.a`
  margin-bottom: 10px;
  text-decoration: none;
  color: ${colors.black};
  :hover {
    color: ${colors.mint};
    cursor: pointer;
  }
`;
