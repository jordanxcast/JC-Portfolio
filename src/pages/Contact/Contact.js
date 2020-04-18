import React, { useEffect } from "react";
import { PageWrapper, PageTitle } from "../../styles";
import { colors } from "../../constant_styles";
import { Links, EmailLink } from "../../components/LinkItem/LinkItem";
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

  document.title = "Jordan Castillo - Contact";

  let kwesScript = document.createElement("script");

  kwesScript.setAttribute("src", "https://kwes.io/js/kwes.js");

  // document.head.appendChild(kwesScript);
  return (
    <PageWrapper
      align="right"
      bgColor={colors.black}
      padding="30px 10px 5px 10px"
      className="kwes-form"
      no-reload
      success-message="Thank you for reaching out!"
    >
      <PageTitle margin="0px auto 30px auto" color={colors.vermilion}>
        Get In Touch
      </PageTitle>
      <ContactDescription margin="10px auto">
        Please reach out if you would like to collaborate on a project, learn
        more about my work, or just get to know eachother. <br />
        <p>I am also currently open to new opportunities.</p>
      </ContactDescription>

      <div>
        <EmailLink />
      </div>

      {/* <ContactForm
        method="POST"
        no-reload
        success-message="Thank you for reaching out!"
        action="https://kwes.io/api/foreign/forms/O8pqpOWh7CpKS52NUXsk"
        id="contact-form"
      >
        <ContactLabel htmlFor="contact_name">Your Name</ContactLabel>
        <ContactInput
          id="contact_name"
          name="name"
          type="text"
          placeholder="Carl Sagan"
          rules="required|max:255"
          required
        ></ContactInput>

        <ContactLabel htmlFor="contact_email">Email</ContactLabel>
        <ContactInput
          id="contact_email"
          name="email"
          type="text"
          placeholder="palebluedot@gmail.com"
          rules="email"
          required
        ></ContactInput>

        <ContactLabel htmlFor="subject">Subject</ContactLabel>
        <ContactInput
          id="subject"
          name="subject"
          type="text"
          placeholder="Cosmos"
          required
        ></ContactInput>

        <ContactLabel htmlFor="contact_message">Message</ContactLabel>
        <ContactTextarea
          id="contact_message"
          name="message"
          type="textarea"
          placeholder='"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology."'
          required
        ></ContactTextarea>

        <FormButton type="submit">Send</FormButton>
      </ContactForm> */}

      <ContactDescription className="other-places">
        Here are some other places you can find me.
      </ContactDescription>
      <Links margin="50px auto 100px" />
      <Footer
        left="-10px"
        bottom="-5px"
        maxwidth="100vw"
        margin="60px 0px 0px"
      />
    </PageWrapper>
  );
}

export default Contact;
