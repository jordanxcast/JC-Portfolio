import React from 'react';
import Header from '../Header/Header'
import LinkItem from '../LinkItem/LinkItem'

function Contact(props) {
  return(
    <>
      <Header 
        title='Get In Touch'
      />

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