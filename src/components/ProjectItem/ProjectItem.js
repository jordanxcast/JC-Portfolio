import React from 'react';
import {ProjectTitle} from './ProjectItem.style'

function  ProjectItem(props){
  return (
    <>
      <ProjectTitle className='PI_title'>
        {props.proj_title}
      </ProjectTitle>

      <img src={props.img_src} alt={props.img_alt}/>

      <div className='PI_tech'>
        <a href={props.repo_href} className='PI_tech_subtitles'>
          Repo
        </a>
        <a href={props.live_href} className='PI_tech_subtitles'>
          Live
        </a>
        <p className='PI_tech_subtitles'>Tech</p>
          <div className='PI_tech_stack'>
          {props.stack}
          </div>
      </div>

      <div className='PI_description'>
        {props.desc}
      </div>
    </>
  );
}

export default ProjectItem;