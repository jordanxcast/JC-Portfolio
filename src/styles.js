import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "./constant_styles";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: -webkit-fill-available;
  width: -webkit-fill-available;
  min-width: 100%;
  margin: 0px;
  padding: ${({ padding }) => (padding ? padding : "30px 0px")};
  position: absolute;
  top: 65;
  z-index: 1;
  background-color: ${(props) => (props ? props.bgColor : colors.offwhite)};


  /*.kw-form-wrapper {
    .kw-form-wrapper {
      > [id^="credit-"] {
        > [id^="credit-link-"] {
          color: ${colors.black} !important;
          max-width: 0px;
          position: absolute;
          left: -100px !important;
          z-index: -11 !important;
          opacity: 0 !important;
        }
      }
      [class*="kw-message"] {
        text-align: center;
        width: fit-content;
        margin: auto;
      }
      .kw-message-error {
        text-align: center !important;
        margin: auto !important;
        background: transparent !important;
        border: 1px solid !important;
        color: ${colors.vermilion};
      }
      .kw-message-110293.kw-message-warning {
        text-align: center !important;
        margin: auto !important;
        background: transparent !important;
        border: 1px solid !important;
        color: ${colors.deeperpurple};
        > a {
          color: ${colors.deeperpurple};
          text-decoration: none;
        }
      }
    }
  }*/
`;

export const Section = styled.section`
  width: ${({ width }) => (width ? width : "80%")};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  align-items: center;
  display: flex;
  flex-direction: column;

  .giphy-embed {
    max-width: 480px;
    min-width: 80px;

    @media (max-width: 400px) {
      width: 80%;
      height: fit-content;
    }
  }

  .project-section {
    /* for chrome and safari*/
    -webkit-animation-duration: 2s;
    -webkit-animation-name: slidein;

    /*for firefox*/
    -moz-animation-duration: 2s;
    -moz-animation-name: slidein;

    /* for opera*/
    -o-animation-duration: 2s;
    -o-animation-name: slidein;

    /* Standard syntax*/
    animation-duration: 2s;
    animation-name: slidein;

    @-webkit-keyframes slidein {
      from {
        width: 0px;
      }

      to {
        width: 100%;
      }
    }

    @keyframes slidein {
      from {
        width: 0px;
      }

      to {
        width: 100%;
      }
    }
  }
`;

export const PageTitle = styled.h1`
  color: ${({ color }) => (color ? color : colors.grey)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${({ padding }) => (padding ? padding : "10px 10px 10px 0px")};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  font-weight: normal;
  width: 80%;
  @media (min-width: 600px) {
    text-align: ${(props) => (props.align ? props.align : "center")};
  }

  @media (max-width: 300px) {
    width: 100%;
    flex-wrap: wrap;
    /* font-size: 16px; */
    padding: 0px;
  }

  @media (max-width: 200px) {
    padding: 5px;
    overflow-wrap: break-word;
    flex-wrap: wrap;
  }
`;

export const NextPage = styled(Link)`
  position: relative;
  border: 1px solid ${({ color }) => (color ? color : colors.outerspace)};
  padding: 15px 30px;
  margin: ${({ margin }) => (margin ? margin : "30px auto 10px auto")};
  width: fit-content;
  text-decoration: none;
  color: ${({ color }) => (color ? color : colors.outerspace)};
  transition: all 0.5s;
  cursor: pointer;
  display: block;
  position: relative;
  transition: 0.5s;
  outline: none;
  @media (max-width: 300px) {
    width: 50%;
    flex-wrap: wrap;
    padding: 5px;
  }
  @media (max-width: 200px) {
    padding: 5px;
    width: 20%;
    font-size: 12px;
    flex-wrap: wrap;
  }

  > button {
    background: transparent;
    font-size: 16px;
    color: ${({ color }) => (color ? color : colors.outerspace)};
    border: none;
    cursor: pointer;

    :hover {
      color: ${({ hovercolor }) =>
        hovercolor ? hovercolor : colors.vermilion};
    }
  }
  :hover,
  :active,
  :focus,
  > button:active {
    cursor: pointer;
    color: ${({ hovercolor }) => (hovercolor ? hovercolor : colors.vermilion)};
    > button {
      color: ${({ hovercolor }) =>
        hovercolor ? hovercolor : colors.vermilion};
    }
  }

  :after {
    content: "→";
    font-size: 30px;
    position: absolute;
    opacity: 0;
    top: 8px;
    color: ${({ hovercolor }) => (hovercolor ? hovercolor : colors.vermilion)};
    right: -50px;
    transition: 0.5s;
  }

  :hover:after,
  :active:after,
  :focus:after,
  > button:after {
    opacity: 1;
    right: -28px;
  }
`;

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button className={cx("Button", className)} ref={ref} {...props}>
      <FontAwesomeIcon icon="chevron-down" />
    </button>
  );
});

export const Down = styled(Button)`
  background: transparent;
  color: ${({ color }) => (color ? color : colors.slategrey)};
  border: none;
  font-size: 1.2em;
  z-index: 11;
  animation: bounce 2s linear infinite;
  :hover,
  :focus {
    cursor: pointer;
    color: ${colors.vermilion};
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
