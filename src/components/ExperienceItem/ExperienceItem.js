import React from 'react';

function ExperienceItem(props) {
  return(
    <>
      <div className='EI_company'>
        {this.props.company}
      </div>

      <div className='EI_position'>
        {this.props.position}
      </div>

      <div className='EI_duration'>
        {this.props.duration}
      </div>

    </>
  );
}

export default ExperienceItem;