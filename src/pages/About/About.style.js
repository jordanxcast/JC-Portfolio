import styled from "styled-components";
import { colors } from "../../constant_styles";

export const AboutSelf = styled.img`
  border: 1px solid ${colors.black};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 10px auto 10px auto;
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
`;

export const BackgroundImg = styled.img`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -11;
  background-color: ${colors.mint};
  height: 60%;
  width: 80%;
`;
