import React from "react";
import styled from "styled-components";
import { colors } from "../../constant_styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  max-width: 900px;
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : "50px auto")};
  /* height: ${({ height }) => (height ? height : "50px")}; */
  height: fit-content;
  align-items: center;
    @media (min-width: 400px) {
    width: 100%;
  }

    @media (min-width: 500px) {
    width: 100%;
  }

  @media (min-width: 600px) {
    width: 80%;
  }

  .link {
    width: 50px;
    border: 1px solid ${colors.vermilion};
    border-radius: 5px;
    padding: ${({ linkpadding }) => (linkpadding ? linkpadding : "10px")};
    color: ${colors.offwhite};
    margin: 8px;
    @media (min-width: 600px) {
      margin: 5px;
    }
  }

  .logo {
    font-size: 2rem;
    height: 100%;
    width: 90%;
  }

  .link {
    :hover {
      animation-name: link;
      animation-duration: 0.5s;
      color: ${colors.vermilion};
      border: 1px solid ${colors.offwhite};

      @keyframes link {
        from {
          color: ${colors.offwhite};
          border: 1px solid ${colors.vermilion};
        }
        to {
          color: ${colors.vermilion};
          border: 1px solid ${colors.offwhite};
        }
      }
    }
  }
`;

function Links(props) {
  return (
    <LinksContainer margin={props.margin}>
      <a
        href="mailto: jordanxcallaway@gmail.com"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="logo" icon={"envelope"} />
      </a>
      <a
        href="https://www.linkedin.com/in/jordan-castillo/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="logo" icon={["fab", "linkedin"]} />
      </a>

      <a
        href="https://github.com/jordanxcast"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="logo" icon={["fab", "github"]} />
      </a>

      <a
        href="https://stackoverflow.com/users/13343529/jordan-castillo?tab=profile"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="logo" icon={["fab", "stack-overflow"]} />
      </a>

      <a
        href="https://www.instagram.com/jordanxcast/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="logo" icon={["fab", "instagram"]} />
      </a>

      <a
        href="https://angel.co/u/jordan-castillo-2"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="logo" icon={["fab", "angellist"]} />
      </a>

      <a
        href="https://trello.com/jordanxcast"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="logo" icon={["fab", "trello"]} />
      </a>
    </LinksContainer>
  );
}

export default Links;
