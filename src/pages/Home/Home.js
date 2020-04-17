/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { PageWrapper, NextPage } from "../../styles";
import { Header } from "./Home.style";
import { colors } from "../../constant_styles";

function Home(props) {
  useEffect(() => {
    typewriter();
  });

  let i = 0;
  const content =
    "Full stack developer with an ever-growing love for learning new things";
  const speed = 50;
  function typewriter() {
    if (i < content.length) {
      document.getElementById("desc").innerHTML += content.charAt(i);
      i++;
      setTimeout(typewriter, speed);
    }
  }

  return (
    <PageWrapper bgColor={colors.black} padding="30px 10px">
      <Header margin="30px 10px">
        <h1>
          Hello, I'm <span className="name">Jordan Castillo</span>
        </h1>

        <h2 id="desc" aria-label="description">
          {""}
        </h2>
      </Header>
      <NextPage
        to="/projects"
        margin="35% auto 10px auto"
        top="90%"
        color={colors.mint}
      >
        <button type='button'>recent projects</button>
      </NextPage>
    </PageWrapper>
  );
}

export default Home;
