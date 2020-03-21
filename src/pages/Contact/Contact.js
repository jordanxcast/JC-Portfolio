import React from 'react';
import LinkItem from '../../components/LinkItem/LinkItem'
import { PageTitle } from '../../components/PageTitle/PageTitle';

function Contact(props) {
  return(
    <>
      <PageTitle>
        Get In Touch
      </PageTitle>

      <form>
        <label htmlFor='contact_name'></label>
        <input name='contact_name' type='text'></input>

        <label htmlFor='contact_email'></label>
        <input name='contact_email' type='text'></input>

        <label htmlFor='contact_message'></label>
        <input name='contact_message' type='textarea'></input>
      </form>

      <h2>Links</h2>
      <LinkItem />
    </>
  );
}

export default Contact;