import React from 'react';
import { PageWrapper } from '../../styles'
import { Header } from './Home.style'
import { colors } from '../../constant_styles'


function Home(props) {
  return(
    <PageWrapper bgColor={colors.black}>
      <Header>
        <h1>Hello, I'm <span className='name'>Jordan Castillo</span></h1>
    
        <h2>Full stack developer with an ever-growing love for learning new things</h2>
      </Header>
    </PageWrapper>
  );
}

export default Home;