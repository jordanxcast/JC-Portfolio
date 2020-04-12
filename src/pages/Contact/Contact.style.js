import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ContactForm = styled.form`
  display: flex;
  margin-top: 100px;
  padding: 40px 60px 0px 60px;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.slategrey};
  border-radius: 10px;
  box-shadow: 0px 0px 21px 5px ${colors.black};

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
  margin-top: 10px;
  color: ${colors.teal};
`;

export const ContactInput = styled.input`
  padding: 10px 20px;
  margin: 10px 0px 50px 0px;
  border-bottom: 2px solid ${colors.mint};
  /* border-radius: 10px; */
  text-align: center;
  font-size: 16px;
  background: transparent;
  color: ${colors.darkpurple};

  :focus {
    border-bottom: 1px solid ${colors.vermilion};
  }
`;

export const ContactTextarea = styled.textarea`
  padding: 10px 20px;
  margin-top: 10px;
  height: 150px;
  border: 2px solid ${colors.mint};
  border-radius: 10px;
  resize: none;
  font-size: 16px;
  background: transparent;

  :focus {
    border: 1px solid ${colors.vermilion};
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  margin: 40px auto;
  background: transparent;
  border: 1px solid ${colors.black};
  color: ${colors.black};
  border-radius: 30px;
  width: fit-content;
  :hover {
    cursor: pointer;
    color: ${colors.mint};
    border: 1px solid ${colors.lightgrey};
    box-shadow: 0px 2px 10px 0px ${colors.black};
  }

  :focus {
    cursor: pointer;
    color: ${colors.teal};
    border: 1px solid ${colors.teal};
    box-shadow: 0px 2px 10px 0px ${colors.deeperpurple};
  }
`;
