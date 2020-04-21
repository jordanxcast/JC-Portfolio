import styled from "styled-components";
import { colors } from "../../constant_styles";

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  margin: auto;
  background: ${({ bgUrl }) =>
    bgUrl ? `url(${bgUrl}) no-repeat center center fixed` : "none"};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .bottom {
    margin: 50px auto 50px;
  }

  .About-wrap {
    align-items: center;
    justify-items: center;
    margin: 0px auto;
    width: 100%;
    display: block;
    text-align: center;

    > h1 {
      width: 80%;
    }
  }

  @media (max-width: 500px) {
    background: ${({ bgUrl }) =>
      bgUrl ? `url(${bgUrl}) no-repeat fixed content-box content-box` : "none"};
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100% 100%;
  }
`;

export const AboutSelf = styled.div`
  border: 2px solid ${colors.black};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 10px auto 10px auto;
  background-image: ${({ src }) => (src ? `url(${src})` : "none")};
  background-position: center;
  background-size: cover;
`;

export const AboutBio = styled.div`
  background-color: ${colors.black};
  padding: 30px 5px;
  opacity: 0.8;
  width: 90%;
  max-width: 1000px;
  color: ${colors.offwhite};
  font-size: 16px;
  line-height: 1.8em;
  height: fit-content;
  text-align: center;
  margin: auto;

  > div {
    margin: 10px;
    opacity: 1;
  }

  @media (min-width: 500px) {
    width: 80%;
    padding: 40px;
  }

  @media (min-width: 600px) {
    width: 70%;
  }
`;
