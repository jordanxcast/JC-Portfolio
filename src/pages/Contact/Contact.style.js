import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px auto;
  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: 750px) {
    width: 70%;
  }

  @media (min-width: 900px) {
    width: 60%;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const ContactLabel = styled.label`
  margin-top: 20px;
`;

export const ContactInput = styled.input`
  padding: 10px 20px;
  margin-top: 10px;
  border: 1px solid ${colors.purplegrey};
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
`;

export const ContactTextarea = styled.textarea`
  padding: 10px 20px;
  margin-top: 10px;
  height: 150px;
  border: 1px solid ${colors.purplegrey};
  border-radius: 10px;
  resize: none;
  font-size: 16px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  margin: 40px auto;
  background: transparent;
  border: 1px solid ${colors.grey};
  border-radius: 30px;
  width: fit-content;
  :hover {
    cursor: pointer;
    color: ${colors.deeppurple};
    border: 2px solid ${colors.deeppurple};
  }
`;
