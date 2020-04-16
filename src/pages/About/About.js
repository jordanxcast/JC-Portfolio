import React, { useEffect } from "react";
import { colors } from "../../constant_styles";
import { PageWrapper, PageTitle, NextPage } from "../../styles";
import {
  AboutPageContainer,
  AboutSelf,
  AboutWrapper,
  BackgroundImg,
} from "./About.style";
// import { Footer } from "../../components/Footer/Footer";
import Succulent from "../../images/Succulent.png";
import Self from "../../images/Self.png";

function About(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageWrapper bgColor={colors.purplegrey} alignContent="center">
      <AboutPageContainer>
        <div className="About-wrap">
          <PageTitle
            align="center"
            margin="40px auto auto auto"
            color={colors.white}
          >
            About Me
          </PageTitle>

          <AboutSelf src={Self} alt="image of self" />
        </div>
        <BackgroundImg src={Succulent} alt="image of self" />
        {/* <h2 style={{textAlign:'center'}}>Jordan Castillo</h2> */}

        <AboutWrapper>
          <div>
            Currently enrolled at Thinkful, I am cultivating my path to graduate
            from the Engineering Immersion Full Stack program and set my
            software developer career in motion. I have always loved solving
            problems. I pursued that interest to my first position after college
            as a Product Manager for a start-up and this is where I was first
            introduced to code. Quickly, I became intrigued and even quicker, my
            interest became an obsession.
          </div>
          <div>
            {" "}
            I often geek out about elegant designs, great user experience, and
            well-written code to execute efficiently. The notion of building
            tools that can help people and the world around me is what inspires
            me to learn as much as I can and become the best I can be at this
            skill. That is what I aim to conquer each day.
          </div>
          <div>
            {" "}
            When I am not writing code, I can be found spending time with my dog
            and family, cozied up reading a book with some coffee, or out
            enjoying some nature.
          </div>
        </AboutWrapper>
      </AboutPageContainer>

      <NextPage to="/experience" margin="100px auto 0px auto">
        my experience
      </NextPage>
      {/* <Footer bottom="-30px" margintop="100px" /> */}
    </PageWrapper>
  );
}

export default About;
