import React, { useState } from 'react'
import styled from 'styled-components'


const SliderContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
`;

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition};
  height: 100%;
  width: ${({width}) => width  ? width : '100%'};
  display: flex;
`;

const SlideContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

`;

const Slide = ({ content }) => (
  <SlideContainer content={content}>

  </SlideContainer>
)

export const Slider = () => {
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })
  const { translate, transition } = state
  return <SliderContainer>
    <SliderContent
      translate={translate}
      transition={transition}
      width={getWidth()}
    >

    </SliderContent>
  </SliderContainer>
}