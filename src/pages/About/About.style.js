import styled from "styled-components";
import { colors } from "../../constant_styles";

export const BackgroundImg = styled.img`
  width: 100%;
  min-width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -30;
  /* position: fixed; */
  /* top: 0px; */
  /* top: 70px; */
  /* left: 0px; */
  /* position: fixed;
  height: 60%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); */

  @media (min-width: 600px) {
    width: 100%;
    /* height: 70%; */
  }
`;

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
  /* background-size: 100%; */
  /* background-position: center; */
  /* background-repeat: no-repeat; */

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
`;

export const AboutSelf = styled.img`
  border: 1px solid ${colors.black};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 10px auto 10px auto;
  object-fit: cover;


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
