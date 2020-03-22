import React from 'react';
import { colors } from '../../constant_styles'
import { PageWrapper } from '../../styles'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

function Projects(props) {
  return(
    <PageWrapper bgColor={colors.teal}>
      <PageTitle align='left'>
        Projects
      </PageTitle>

      <section>
        <ProjectItem 
          proj_title='Thoughtful Travels'
          img_src=''
          img_alt='Project Interface'
          repo_href=''
          stack=''
          desc='Description'
        />
        <ProjectItem 
          proj_title='Spaced Repetition'
          img_src=''
          img_alt='Project Interface'
          repo_href=''
          stack=''
          desc='Description'
        />
        <ProjectItem 
          proj_title='Capstone III'
          img_src=''
          img_alt='Project Interface'
          repo_href=''
          stack=''
          desc='Description'
        />
      </section>
    </PageWrapper>
  );
}

export default Projects;