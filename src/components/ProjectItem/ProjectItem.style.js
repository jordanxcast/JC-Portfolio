import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ProjectItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 50px auto 0px;
  padding: 50px 30px;
  background-color: ${colors.offwhite};
  .project-details {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    align-items: center;
  }

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

  .skills {
    align-self: flex-end;
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin-right: 0px;
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
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${colors.darkpurple};
  padding: 0px;
  font-size: 14px;

  .tech {
    display: flex;
    height: 35px;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin-top: 0;

    > p {
      margin: 0px;
      height: fit-content;
      text-align: center;
    }
  }

  .tech-btn {
    background: transparent;
    -moz-transition: all 0.25s linear;
    -webkit-transition: all 0.25s linear;
    transition: all 0.25s linear;
    :hover {
      cursor: pointer;
      color: ${colors.vermilion};
    }
  }
  .tech-btn.closed {
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  a::before,
  a::after {
    display: inline-block;
    opacity: 0;

    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
  }

  a::before {
    margin-right: 10px;
    content: "[";
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
  }

  a::after {
    margin-left: 10px;
    content: "]";
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  a:hover::before,
  a:hover::after,
  a:focus::before,
  a:focus::after {
    color: ${colors.vermilion};
    opacity: 1;
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }
`;

export const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  width: 100%;
  text-align: center;
  font-size: 14px;

  .description {
    color: ${colors.outerspace};
    width: 100%;
    margin: 0px 0px 5px 0px;
    > span {
      color: ${colors.deeperpurple};
    }
  }
`;

export const ProjectLink = styled.a`
  margin-bottom: 0px;
  text-decoration: none;
  color: ${colors.black};
  text-align: center;
  height: 35px;
  line-height: 35px;
  width: 30%;
  padding-bottom: 10px;

  :hover {
    color: ${colors.vermilion};
  }
`;
