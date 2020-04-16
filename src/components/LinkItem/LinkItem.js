import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constant_styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinksContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: ${({ margin }) => (margin ? margin : "50px auto")};
  height: ${({ height }) => (height ? height : "50px")};
  align-items: center;

  .link {
    width: 50px;
    border: 1px solid ${colors.vermilion};
    border-radius: 5px;
    padding: ${({ linkpadding }) => (linkpadding ? linkpadding : "10px")};
    color: ${colors.offwhite};
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
      <Link href="/about" className="link">
        <FontAwesomeIcon className="logo" icon={["fab", "linkedin"]} />
      </Link>

      <Link href="/about" className="link">
        <FontAwesomeIcon className="logo" icon={["fab", "github"]} />
      </Link>

      <Link href="/about" className="link">
        <FontAwesomeIcon className="logo" icon={["fab", "stack-overflow"]} />
      </Link>

      <Link href="/about" className="link">
        <FontAwesomeIcon className="logo" icon={["fab", "instagram"]} />
      </Link>

      <Link href="/about" className="link">
        <FontAwesomeIcon className="logo" icon={["fab", "angellist"]} />
      </Link>

      <a href="/about" className="link">
        <FontAwesomeIcon className="logo" icon={["fab", "trello"]} />
      </a>
    </LinksContainer>
  );
}

export default Links;
