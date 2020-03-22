import React from 'react';
import { ExperienceItemWrapper} from './ExperienceItem.style'
import { colors } from '../../constant_styles'

function ExperienceItem(props) {
  return(
    <ExperienceItemWrapper>
      <div style={{fontSize:'1.5em'}}>
        {props.company}
      </div>

      <div>
        {props.position}
      </div>

      <div style={{color: colors.teal}}>
        {props.duration}
      </div>

    </ExperienceItemWrapper>
  );
}

export default ExperienceItem;