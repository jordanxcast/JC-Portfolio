import React from 'react';
import { PageTitle } from '../../components/PageTitle/PageTitle'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

function Projects(props) {
  return(
    <>
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
          proj_title='Spaced Repition'
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
    </>
  );
}

export default Projects;