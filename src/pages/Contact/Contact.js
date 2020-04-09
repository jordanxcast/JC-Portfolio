import React from "react";
import { PageWrapper } from "../../styles";
import LinkItem from "../../components/LinkItem/LinkItem";
import { PageTitle } from "../../styles";
import {
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  FormButton,
} from "./Contact.style";

function Contact(props) {
  return (
    <PageWrapper align="right">
      <PageTitle margin="0px auto">Get In Touch</PageTitle>

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
          margin: "20px 50px",
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
