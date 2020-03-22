import React from 'react';
import { PageWrapper } from '../../styles'
import LinkItem from '../../components/LinkItem/LinkItem'
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ContactForm, ContactLabel, ContactInput } from './Contact.style'

function Contact(props) {
  return(
    <PageWrapper align='right'>
      <PageTitle>
        Get In Touch
      </PageTitle>

      <ContactForm>
        <ContactLabel htmlFor='contact_name'> 
          Your Name 
        </ContactLabel>
        <ContactInput name='contact_name' type='text'></ContactInput>

        <ContactLabel htmlFor='contact_email'> 
          Email 
        </ContactLabel>
        <ContactInput name='contact_email' type='text'></ContactInput>

        <ContactLabel htmlFor='contact_message'> 
          Message 
        </ContactLabel>
        <ContactInput name='contact_message' type='textarea'></ContactInput>
      </ContactForm>

      <h2>Links</h2>
      <LinkItem />
    </PageWrapper>
  );
}

export default Contact;