import React from "react";
import { Link } from "react-router-dom";
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
      <Link href="/about" className="footer-link">
        <FontAwesomeIcon className="footer-logo" icon={["fab", "linkedin"]} />
      </Link>

      <Link href="/about" className="footer-link">
        <FontAwesomeIcon className="footer-logo" icon={["fab", "github"]} />
      </Link>

      <Link href="/about" className="footer-link">
        <FontAwesomeIcon
          className="footer-logo"
          icon={["fab", "stack-overflow"]}
        />
      </Link>

      <Link href="/about" className="footer-link">
        <FontAwesomeIcon className="footer-logo" icon={["fab", "instagram"]} />
      </Link>

      <Link href="/about" className="footer-link">
        <FontAwesomeIcon className="footer-logo" icon={["fab", "angellist"]} />
      </Link>

      <a href="/about" className="footer-link">
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
  width: 100vw;
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : "100%")};
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 10px;
  > div {
    font-size: 14px;
    padding-bottom: 5px;
  }

  @media (min-width: 900px) {
    text-align: left;
  }
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
          <div>Resume</div>
          <div>jordanxcallaway@gmail.com</div>
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
