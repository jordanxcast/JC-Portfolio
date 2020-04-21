import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ContactForm = styled.form`
  display: flex;
  margin-top: 100px;
  padding: 40px 15px 0px 15px;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  background: transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 21px 5px ${colors.black};
  margin: 10px auto;

  @media (min-width: 350px) {
    width: 90%;
    /* padding: 40px 20px 0px 20px; */
  }

  @media (min-width: 600px) {
    width: 80%;
    padding: 40px 20px 0px 20px;
  }

  @media (min-width: 750px) {
    width: 70%;
  }

  @media (min-width: 900px) {
    width: 60%;
  }

  @media (min-width: 1000px) {
    width: 50%;
    padding: 40px 20px 0px 20px;
  }

  .is-danger-110293,
  .is-success-110293 {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${colors.mint};
    margin-bottom: 5px;
  }

  .help.is-danger-110293 {
    border: none;
    text-align: center;
    margin: 5px auto 10px;
  }

  .kw-message-110293.kw-message-error {
    text-align: center !important;
    margin: auto !important;
    background: transparent !important;
    border: 1px solid !important;
  }
`;

export const ContactDescription = styled.div`
  text-align: center;
  margin: ${({ margin }) => (margin ? margin : "50px auto 0px auto")};
  width: 90%;
  max-width: 650px;
  color: ${colors.offwhite};
  font-size: 16px;
  > p {
    padding-top: 30px;
    line-height: 1rem;
    color: ${colors.mint};
  }

  .success-appear {
    opacity: 1;
    transition: all 250ms linear;
  }

  .success-exit {
    opacity: 0;
    transition: all 250ms linear;
  }

  @media (min-width: 600px) {
    width: 80%;
    font-size: 18px;
  }

  @media (min-width: 800px) {
    width: 70%;
    font-size: 20px;

    > p {
      line-height: 1.2rem;
    }
  }

  .other-places {
    @media (min-width: 800px) {
      width: 70%;
      font-size: 28px;
    }
  }

  @media (max-width: 200px) {
    > p {
      overflow-wrap: break-word;
    }
  }
`;
export const SuccessfulSubmit = styled.div`
  color: ${colors.vermilion};
  text-align: center;
  background: transparent;
  margin: 30px auto;
  border: 1px solid ${colors.vermilion};
  padding: 10px;
  width: fit-content;
`;

export const ContactLabel = styled.label`
  margin-top: 5px;
  color: ${colors.teal};
`;

export const ContactInput = styled.input`
  padding: 10px 20px;
  margin: 5px 0px 50px 0px;
  border-bottom: 1px solid ${colors.mint};
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.015rem;
  background: transparent;
  color: ${colors.offwhite};
  width: 100%;
  :focus {
    border-bottom: 2px solid ${colors.vermilion};
  }
`;

export const ContactTextarea = styled.textarea`
  padding: 20px;
  width: 100%;
  margin-top: 10px;
  min-height: 120px;
  max-height: 500px;
  border: 1px solid ${colors.mint};
  resize: none;
  font-size: 16px;
  text-align: center;
  line-height: 1.5rem;
  background: transparent;
  color: ${colors.offwhite};

  :focus {
    border: 2px solid ${colors.vermilion};
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  margin: 40px auto 20px auto;
  background: transparent;
  border: 1px solid ${colors.mint};
  color: ${colors.mint};
  border-radius: 30px;
  width: fit-content;
  :hover {
    cursor: pointer;
    color: ${colors.teal};
    border: 1px solid ${colors.teal};
    box-shadow: 0px 2px 10px 0px ${colors.darkgrey};
  }

  :focus {
    cursor: pointer;
    color: ${colors.teal};
    border: 1px solid ${colors.teal};
    box-shadow: 0px 2px 10px 0px ${colors.darkgrey};
  }
`;
