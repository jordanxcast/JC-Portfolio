import React from 'react';
import Header from '../Header/Header';
import ExperienceItem from '../ExperienceItem/ExperienceItem'

function Experience(props) {
  return(
    <>
      <Header 
        title='Experience'
      />

      <section className='Experience_skills'>
        <h2>Skills</h2>
        <p>List of skills</p>
      </section>

      <section className='Experience_skills'>
        <ExperienceItem 
          company=''
          position=''
          duration=''
        />
      </section>
      

    </>
  );
}

export default Experience;