import React from 'react';
import Header from '../Header/Header';

function About(props) {
  return(
    <>
      <Header 
        title='About Me'
      />

      <img src='' alt='Background' className='About_bg_img'/>

      <img src='' alt='Self' className='About_img'/>

      <h2 className='About_name'>Jordan Castillo</h2>

      <p className='About_overview'>
        About self
      </p>
    </>
  );
}

export default About;