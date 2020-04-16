import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let kwesScript = document.createElement("script");

  kwesScript.setAttribute("src", "https://kwes.io/js/kwes.js");

  document.head.appendChild(kwesScript);
  return (
    <PageWrapper
      align="right"
      bgColor={colors.black}
      padding="30px 30px 5px 30px"
      class="kwes-form"
    >
      <PageTitle margin="0px auto 30px auto" color={colors.vermilion}>
        Get In Touch
      </PageTitle>
      <ContactDescription margin="10px auto">
        Please reach out if you would like to collaborate on a project, learn
        more about my work, or just get to know eachother. <br />
        <span>I am also currently open to new opportunities.</span>
      </ContactDescription>

      <ContactForm
        method="POST"
        action="https://kwes.io/api/foreign/forms/O8pqpOWh7CpKS52NUXsk"
      >
        <ContactLabel htmlFor="contact_name">Your Name</ContactLabel>
        <ContactInput
          id="contact_name"
          name="contact_name"
          type="text"
          placeholder="Carl Sagan"
          rules="required|max:255"
        ></ContactInput>

        <ContactLabel htmlFor="contact_email">Email</ContactLabel>
        <ContactInput
          id="contact_email"
          name="contact_email"
          type="text"
          placeholder="palebluedot@gmail.com"
        ></ContactInput>

        <ContactLabel htmlFor="subject">Subject</ContactLabel>
        <ContactInput
          id="subject"
          name="contact_subject"
          type="text"
          placeholder="Cosmos"
        ></ContactInput>

        <ContactLabel htmlFor="contact_message">Message</ContactLabel>
        <ContactTextarea
          id="contact_message"
          name="contact_message"
          type="textarea"
          placeholder='"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology."'
        ></ContactTextarea>

        <FormButton type="submit">Send</FormButton>
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
      <Links margin="50px auto 100px" />
      <Footer
        left="-30px"
        bottom="-5px"
        maxwidth="auto"
        margin="60px 0px 0px"
      />
    </PageWrapper>
  );
}

export default Contact;
