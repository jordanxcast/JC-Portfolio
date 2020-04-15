import React from "react";
import { PageWrapper, PageTitle } from "../../styles";
import { colors } from "../../constant_styles";
import Links from "../../components/LinkItem/LinkItem";
import { Footer } from "../../components/Footer/Footer";
import {
  ContactDescription,
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  FormButton,
} from "./Contact.style";

function Contact(props) {
  return (
    <PageWrapper
      align="right"
      bgColor={colors.black}
      padding="30px 30px 5px 30px"
    >
      <PageTitle margin="0px auto 30px auto" color={colors.vermilion}>
        Get In Touch
      </PageTitle>
      <ContactDescription margin="10px auto">
        Please reach out if you would like to collaborate on a project, learn
        more about my work, or just get to know eachother. <br />
        <span>I am also currently open to new opportunities.</span>
      </ContactDescription>

      <ContactForm>
        <ContactLabel htmlFor="contact_name">Your Name</ContactLabel>
        <ContactInput
          id="contact_name"
          type="text"
          placeholder="Carl Sagan"
        ></ContactInput>

        <ContactLabel htmlFor="contact_email">Email</ContactLabel>
        <ContactInput
          id="contact_email"
          type="text"
          placeholder="palebluedot@gmail.com"
        ></ContactInput>

        <ContactLabel htmlFor="subject">Subject</ContactLabel>
        <ContactInput
          id="subject"
          type="text"
          placeholder="Cosmos"
        ></ContactInput>

        <ContactLabel htmlFor="contact_message">Message</ContactLabel>
        <ContactTextarea
          id="contact_message"
          type="textarea"
          placeholder='"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology."'
        ></ContactTextarea>

        <FormButton>Send</FormButton>
      </ContactForm>

      {/* <h2 style={{ margin: "30px auto" }}>Links</h2> */}
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "100px 10px 10px 10px",
        }}
      >
      </div> */}
      <ContactDescription>
        Here are some other places you can find me.
      </ContactDescription>
      <Links />
      <Footer left="-30px" bottom="-5px" maxwidth="auto" />
    </PageWrapper>
  );
}

export default Contact;
