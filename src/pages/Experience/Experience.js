import React from 'react';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'

function Experience(props) {
  return(
    <>
      <PageTitle>
        Experience
      </PageTitle>

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