import React from 'react';
import { PageWrapper, Header } from './Home.style'
import { colors } from '../../constant_styles'


function Home(props) {
  return(
    <PageWrapper bgColor={colors.teal}>
      <Header boxShadow='0px -2px 8px 3px rgba(0,0,0,0.75)' margin='190px 20px 0px 20px' minMargin='200px auto 0px 0px' >
          Hello, I'm Jordan Castillo
      </Header>
        
      <Header boxShadow='0px 0px 8px 3px rgba(0,0,0,0.75)' zIndex='-1'>
          Full stack developer with an ever-growing love for learning new things
      </Header>
    </PageWrapper>
  );
}

export default Home;