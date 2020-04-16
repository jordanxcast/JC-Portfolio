import styled from "styled-components";
import { colors } from "../../constant_styles";

export const ContactForm = styled.form`
  display: flex;
  margin-top: 100px;
  padding: 40px 60px 0px 60px;
  flex-direction: column;
  width: 100%;
  background: transparent;
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

export const ContactDescription = styled.div`
  text-align: center;
  margin: ${({ margin }) => (margin ? margin : "100px auto 0px auto")};
  width: 80%;
  color: ${colors.offwhite};
  font-size: 18px;
  > span {
    line-height: 4rem;
    color: ${colors.mint};
  }

  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const ContactLabel = styled.label`
  margin-top: 5px;
  color: ${colors.teal};
`;

export const ContactInput = styled.input`
  padding: 10px 20px;
  margin: 5px 0px 50px 0px;
  border-bottom: 1px solid ${colors.mint};
  /* border-radius: 10px; */
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.015rem;
  background: transparent;
  color: ${colors.offwhite};

  :focus {
    border-bottom: 2px solid ${colors.vermilion};
  }
`;

export const ContactTextarea = styled.textarea`
         padding: 20px;
         margin-top: 10px;
         min-height: 120px;
         max-height: 500px;
         border: 1px solid ${colors.mint};
         /* border-radius: 10px; */
         /* border-bottom: 1px solid ${colors.mint};
         border-left: 1px solid ${colors.mint};
         border-right: 1px solid ${colors.mint}; */
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
  margin: 40px auto;
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
