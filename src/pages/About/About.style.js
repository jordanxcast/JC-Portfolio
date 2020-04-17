import styled from "styled-components";
import { colors } from "../../constant_styles";

export const BackgroundImg = styled.img`
  width: 100%;
  height: 60%;
  opacity: 0.5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -11;

  @media (min-width: 600px) {
    width: 90%;
    height: 70%;
  }
`;

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;

  .bottom {
    margin: 200px auto 0px;
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

  @media (min-width: 800px) {
    padding-top: 150px;
  }
`;

export const AboutSelf = styled.img`
  border: 1px solid ${colors.black};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 10px auto 10px auto;
  object-fit: cover;
  /* 
  @media (min-width: 900px) {
    position: relative;
    margin-top: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`;

export const AboutBio = styled.div`
  background-color: ${colors.black};
  padding: 30px 5px;
  opacity: 0.8;
  width: 100%;
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
    padding: 40px;
  }

  @media (min-width: 600px) {
    width: 70%;
  }
`;