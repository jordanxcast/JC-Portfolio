import React from "react";
import { PageWrapper, PageTitle } from "../../styles";
import { colors } from "../../constant_styles";
import LinkItem from "../../components/LinkItem/LinkItem";
import {
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

      <ContactForm>
        <ContactLabel htmlFor="contact_name">Your Name</ContactLabel>
        <ContactInput id="contact_name" type="text"></ContactInput>

        <ContactLabel htmlFor="contact_email">Email</ContactLabel>
        <ContactInput id="contact_email" type="text"></ContactInput>

        <ContactLabel htmlFor="contact_message">Message</ContactLabel>
        <ContactTextarea id="contact_message" type="textarea"></ContactTextarea>

        <FormButton>Send</FormButton>
      </ContactForm>

      {/* <h2 style={{ margin: "30px auto" }}>Links</h2> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "100px 10px 10px 10px",
        }}
      >
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
      </div>
    </PageWrapper>
  );
}

export default Contact;
