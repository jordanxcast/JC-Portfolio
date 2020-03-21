import React from 'react'
import { colors } from '../../constant_styles'
import { PageWrapper } from '../../styles'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { AboutSelf, AboutWrapper } from './About.style'


function About(props) {
  return(
    <PageWrapper bgColor={colors.purplegrey}>
      <PageTitle align='left'>
        About Me
      </PageTitle> 
      
      <AboutSelf src='' alt='image of self'/>

      <h2 className='About_name'>Jordan Castillo</h2>

      <AboutWrapper>
        <p style={{color: colors.offwhite}}>
        Currently enrolled at Thinkful, I am cultivating my path to graduate from the Engineering Immersion Full Stack program and set my software developer career in motion. I have always loved solving problems. I pursued that interest to my first position after college as a Product Manager for a start-up and this is where I was first introduced to code. Quickly, I became intrigued and even quicker, my interest became an obsession. 
        <br></br>
        I often geek out about elegant designs, great user experience, and well-written code to execute efficiently. The notion that I can build great things that will help people and the world around me is what inspires me to learn as much as I can and become the best I can be at this skill. That is what I aim to conquer each day. 
        <br></br>
        When I am not writing code, I can be found spending time with my dog and family, cozied up reading a book with some coffee, or out enjoying some nature. 
        </p>
      </AboutWrapper>
      
    </PageWrapper>
  );
}

export default About;