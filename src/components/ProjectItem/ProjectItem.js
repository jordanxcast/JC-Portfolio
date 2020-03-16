import React from 'react';

function  ProjectItem(props){
  return (
    <>
      <h2 className='PI_title'>
        {this.props.proj_title}
      </h2>

      <img src={this.props.img_src} alt={this.props.img_alt}/>

      <div className='PI_tech'>
        <a href={this.props.repo_href} className='PI_tech_subtitles'>
          Repo
        </a>
        <a href={this.props.live_href} className='PI_tech_subtitles'>
          Live
        </a>
        <p className='PI_tech_subtitles'>Tech</p>
          <div className='PI_tech_stack'>
          {this.props.stack}
          </div>
      </div>

      <div className='PI_description'>
        {this.props.desc}
      </div>
    </>
  );
}

export default ProjectItem;