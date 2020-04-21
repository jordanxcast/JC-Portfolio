import styled from "styled-components";
import { colors } from "../../constant_styles";

export const Header = styled.div`
  color: ${colors.offwhite};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  font-size: 1.2em;
  font-weight: 400;
  line-height: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: ${(props) => (props.zIndex ? props.zIndex : "auto")};
  height: 50%;
  align-content: center;

  > h1 {
    padding: ${({ padding }) => (padding ? padding : "20px 20px")};
    font-weight: 400;
    margin: 0px;
    .name {
      color: ${colors.mint};
    }
  }

  > h2 {
    padding: ${({ padding }) => (padding ? padding : "20px 20px")};
    margin: 0px;
    font-weight: 400;
  }

  @media (min-width: 600px) {
    margin: 100px 10px;
  }

  @media (max-width: 200px) {
    overflow-wrap: break-word;
    > h1,
    h2 {
      padding-right: 0px;
    }
  }
`;
