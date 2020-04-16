import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "./constant_styles";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: -webkit-fill-available;
  width: -webkit-fill-available;
  margin: auto;
  padding: ${({ padding }) => (padding ? padding : "30px 30px")};
  position: absolute;
  top: 65;
  z-index: 1;
  background-color: ${(props) => (props ? props.bgColor : colors.offwhite)};
  /* align-content: ${({ alignContent }) =>
    alignContent ? alignContent : "center"};    */

`;

export const Section = styled.section`
  width: ${({ width }) => (width ? width : "80%")};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  align-items: center;
  display: flex;
  flex-direction: column;

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
  /* font-size: 30px; */
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${({ padding }) => (padding ? padding : "10px 10px 10px 0px")};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  font-weight: normal;
  width: 80%;
  @media (min-width: 600px) {
    text-align: ${(props) => (props.align ? props.align : "center")};
  }
`;

export const NextPage = styled(Link)`
  position: relative;
  border: 1px solid ${({ color }) => (color ? color : colors.outerspace)};
  padding: 15px 30px;
  margin: ${({ margin }) => (margin ? margin : "30px auto 10px auto")};
  display: block;
  width: fit-content;
  text-decoration: none;
  color: ${({ color }) => (color ? color : colors.outerspace)};

  :hover {
    color: ${({ hovercolor }) => (hovercolor ? hovercolor : colors.white)};
    border: 2px solid
      ${({ hovercolor }) => (hovercolor ? hovercolor : colors.white)};
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

/* 
// export const SectionTitle = styled.h3 `
//   margin-top: 1.5em;
//   margin-bottom: 0.5em;
// `;

// export const Paragraph = styled.p `
//   white-space: pre-wrap;
// `;

// export const Pill = styled.span `
//   display: inline-block;
//   margin-right: 0.75em;
//   margin-bottom: 0.75rem;
//   padding: 0.5rem 1rem;
//   background-color: ${blue[20]};
//   color: ${blue[70]};
//   border: 3px solid ${blue[70]};
//   border-radius: 2px;
//   font-weight: bold;
// `;

//HEADER STYLES
// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;

//   @media (max-width: 640px) {
//     display: ${({ isHome }) => (!isHome ? 'none' : 'flex')}; 
//     flex-direction: row;
//   }
// `;

// export const Header = styled.div `
//   display: flex;

//   @media(max-width: 640px) {
//     flex-direction: row;
//   }
// `;

// export const Image = styled.img `
//   width: 200px;
//   margin-right: 1em;
//   border-radius: 2px;
// `;

// export const ViewResumeLink = styled.a `
//   display: flex;
//   text-decoration: none;
//   padding: 0.75em 1em;
//   font-weight: bold;
//   align-items: center;
// `; */
