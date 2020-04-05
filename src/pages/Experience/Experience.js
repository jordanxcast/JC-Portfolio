import React from 'react';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'
import { PageWrapper, PageTitle } from '../../styles'
import { Skills, ExperienceSection } from './Experience.style';

function Experience(props) {
  return(
    <PageWrapper>
      <PageTitle>
        Experience
      </PageTitle>

      <Skills>
        <h2 style={{margin: '0px'}}>Skills</h2>
        <p style={{margin: '0px 20px'}}>
        Html5, CSS, JavaScript, ES6, Babel, React, Node, Express, Jest, Enzyme, SQL, Webpack, PostgreSQL, SCRUM, Git, GitHub
        </p>
      </Skills>

      <ExperienceSection className='Experience_skills'>
        <ExperienceItem 
          company='Thinkful'
          position='Apprenticeship'
          duration='Oct. 2019 - April 2020'
        />
      </ExperienceSection>
    </PageWrapper>
  );
}

export default Experience;