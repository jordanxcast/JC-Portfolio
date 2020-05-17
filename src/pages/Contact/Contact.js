import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { PageWrapper, PageTitle } from "../../styles";
import { colors } from "../../constant_styles";
import { Links } from "../../components/LinkItem/LinkItem";
import { Footer } from "../../components/Footer/Footer";
import {
  ContactDescription,
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  FormButton,
  SuccessfulSubmit,
} from "./Contact.style";
import { writeContactsData } from "../../server/server";

function Contact(props) {
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  document.title = "Jordan Castillo - Contact";

  // let kwesScript = document.createElement("script");
  // kwesScript.setAttribute("src", "https://kwes.io/js/kwes.js");
  // document.head.appendChild(kwesScript);

  function setStatus(status) {
    if (status === "successful") {
      setSuccessfulSubmit(true);
    }

    setTimeout(() => {
      setSuccessfulSubmit(false);
    }, 6000);
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    const { name, email, subject, message } = e.target;
    const full_name = name.value;
    const contact_email = email.value;
    const contact_subject = subject.value;
    const contact_message = message.value;
    // console.log(full_name, contact_email, contact_subject, contact_message);

    // send value to write in firebase database
    writeContactsData(
      full_name,
      contact_email,
      contact_subject,
      contact_message,
      (status) => setStatus(status)
    );

    //clear input values
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
  return (
    <PageWrapper bgColor={colors.black} padding="30px 0px 5px">
      <PageTitle margin="0px auto 30px auto" color={colors.vermilion}>
        Get In Touch
      </PageTitle>
      <ContactDescription margin="10px auto">
        Please reach out if you would like to collaborate on a project, learn
        more about my work, or just get to know each other. <br />
        <p>I am also currently open to new opportunities.</p>

        <CSSTransition
          in={successfulSubmit}
          timeout={600}
          classNames="success"
          unmountOnExit
          appear
        >
          <SuccessfulSubmit>Thank you for reaching out! </SuccessfulSubmit>
        </CSSTransition>

      </ContactDescription>

      <ContactForm
        id="contact-form"
        onSubmit={(ev) => {
          handleFormSubmission(ev);
        }}
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
      </ContactForm>

      <ContactDescription className="other-places">
        Here are some other places you can find me.
      </ContactDescription>
      <Links margin="50px auto 100px" />
      <Footer left="0px" bottom="-5px" maxwidth="100vw" margin="60px 0px 0px" />
    </PageWrapper>
  );
}

export default Contact;
