import React from "react";
import { PageWrapper, NextPage } from "../../styles";
import { Header } from "./Home.style";
import { colors } from "../../constant_styles";


function Home(props) {
  return (
    <PageWrapper bgColor={colors.black}>
      <Header margin='100px 20px'>
        <h1>
          Hello, I'm <span className="name">Jordan Castillo</span>
        </h1>

        <h2>
          Full stack developer with an ever-growing love for learning new things
        </h2>
      </Header>
      <NextPage to="/about" margin="35% auto 10px auto" top="90%">
        about me
      </NextPage>
    </PageWrapper>
  );
}

export default Home;
