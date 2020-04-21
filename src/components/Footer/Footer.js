import React from "react";
import { colors } from "../../constant_styles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0px;
  height: 40px;
  align-items: center;
  @media (min-width: 900px) {
    margin: 0px auto;
  }

  .footer-link {
    width: 50px;
    border-radius: 5px;
    padding: 5px;
    color: ${colors.purplegrey};
    height: 100%;
    text-align: center;
  }

  .footer-logo {
    font-size: 2rem;
    height: 90%;
    width: 90%;
  }

  .footer-link {
    :hover {
      animation-name: footer-link;
      animation-duration: 1s;
      color: ${colors.slategrey};
      border: 1px solid ${colors.offwhite};

      @keyframes footer-link {
        from {
          color: ${colors.purplegrey};
          border: 1px solid ${colors.purplegrey};
        }
        to {
          color: ${colors.slategrey};
          border: 1px solid ${colors.offwhite};
        }
      }
    }
  }
`;

const FooterLinks = (props) => {
  return (
    <FooterLinksContainer>
      <a
        href="mailto:jordanxcallaway@gmail.com"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="footer-logo" icon={"envelope"} />
      </a>

      <a
        href="https://www.linkedin.com/in/jordan-castillo/"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="footer-logo" icon={["fab", "linkedin"]} />
      </a>

      <a
        href="https://github.com/jordanxcast"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="footer-logo" icon={["fab", "github"]} />
      </a>

      <a
        href="https://stackoverflow.com/users/13343529/jordan-castillo?tab=profile"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="footer-logo"
          icon={["fab", "stack-overflow"]}
        />
      </a>

      <a
        href="https://www.instagram.com/jordanxcast/"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="footer-logo" icon={["fab", "instagram"]} />
      </a>

      <a
        href="https://angel.co/u/jordan-castillo-2"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="footer-logo" icon={["fab", "angellist"]} />
      </a>

      <a
        href="https://trello.com/jordanxcast"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="footer-logo" icon={["fab", "trello"]} />
      </a>
    </FooterLinksContainer>
  );
};

const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  width: 50%;
  margin: 0px;
  align-items: center;
  @media (min-width: 900px) {
    width: 30%;
    margin: 0px;
  }
`;

const FooterContainer = styled.div`
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : colors.lightgrey)};
  display: flex;
  flex-direction: column;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
  min-width: 100%;
  height: fit-content;
  z-index: inherit;
  position: relative;
  bottom: ${({ bottom }) => (bottom ? bottom : "-20px")};
  left: ${({ left }) => (left ? left : "-30px")};
  color: ${colors.slategrey};
  margin-top: ${({ margintop }) => (margintop ? margintop : "30px")};
  padding: 0px;
  @media (min-width: 900px) {
    height: 100px;
    padding: 10px 30px 10px 30px;
  }
`;

const FooterTop = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > div {
    padding: 10px;
    font-size: 14px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  height: 30%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  > div {
    text-align: center;
    width: fit-content;
    align-content: baseline;
    height: fit-content;
  }
`;

const FooterLeft = styled.div`
  width: fit-content;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 10px;
  > div {
    font-size: 14px;
    padding-bottom: 5px;
    > a {
      text-decoration: none;
      color: ${colors.slategrey};

      :hover {
        cursor: pointer;
        color: ${colors.purplegrey};
        padding: 0px 10px;
        border-left: 1px solid ${colors.offwhite};
        border-right: 1px solid ${colors.offwhite};
      }
    }
  }

  @media (min-width: 900px) {
    text-align: left;
    > div > a:hover {
      cursor: pointer;
      color: ${colors.purplegrey};
      padding: 0px 5px 0px 0px;
      border-left: none;
      border-right: 1px solid ${colors.offwhite};
    }
  }

  @media (max-width: 300px) {
    .email {
      font-size: 12px;
      flex-wrap: wrap;
      overflow-wrap: break-word;
    }
  }

  /* @media (max-width: 200px) {
    padding: 5px;
    width: 20%;
    font-size: 12px;
    flex-wrap: wrap;
  } */
`;

export const Footer = (props) => {
  return (
    <FooterContainer
      bottom={props.bottom}
      margintop={props.margintop}
      bgcolor={props.bgcolor}
      left={props.left}
      maxwidth={props.maxwidth}
    >
      <FooterTop>
        <FooterLeft>
          <div>
            <a
              href="https://jordan-portfolio.s3-us-west-1.amazonaws.com/Jordan_Castillo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <div>
            <a
              className="email"
              href=" mailto:jordanxcallaway@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              jordanxcallaway@gmail.com
            </a>
          </div>
        </FooterLeft>
        <LinkContainer>
          <FooterLinks margin="0px auto" height="30px" linkpadding="3px" />
        </LinkContainer>
      </FooterTop>

      <FooterBottom>
        <div>&#169; Jordan Castillo 2020</div>
      </FooterBottom>
    </FooterContainer>
  );
};
