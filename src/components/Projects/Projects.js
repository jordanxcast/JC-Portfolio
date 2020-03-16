import React from 'react';
import Header from '../Header/Header';
import ProjectItem from '../ProjectItem/ProjectItem'

function Projects(props) {
  return(
    <>
      <Header 
        title='Projects'
      />

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