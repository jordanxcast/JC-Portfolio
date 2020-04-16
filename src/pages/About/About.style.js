import styled from "styled-components";
import { colors } from "../../constant_styles";

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  .About-wrap {
    flex-direction: column;
    margin: auto;
    > h1 {
      width: 100%;
    }

    @media (min-width: 900px) {
      width: 20%;
      position: fixed;
      top: 50%;
      left: 25%;
      transform: translate(-50%, -50%);
      margin: auto 10px;

      > h1 {
        width: 100%;
        padding: 10px;
      }
    }
  }
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const AboutSelf = styled.img`
  border: 1px solid ${colors.black};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 10px auto 10px auto;
  object-fit: cover;

  @media (min-width: 900px) {
    position: relative;
    margin-top: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const AboutWrapper = styled.div`
  background-color: ${colors.black};
  padding: 30px;
  opacity: 80%;
  width: 80%;
  margin: 10px auto;
  color: ${colors.offwhite};
  font-size: 16px;
  line-height: 1.8em;
  height: fit-content;
  text-align: center;

  > div {
    margin: 10px auto;
    opacity: 100%;
  }
  @media (min-width: 900px) {
    width: 50%;
    position: relative;
    margin-right: 100px;
  }
`;

export const BackgroundImg = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -11;
  background-color: ${colors.mint};
  height: 70%;
  width: 100%;
  opacity: 50%;
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
  @media (min-width: 900px) {
    width: 90%;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 50%;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 50%;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 50%;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 50%;
    }
  }
`;
