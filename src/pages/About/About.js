import React, { useEffect } from "react";
import { colors } from "../../constant_styles";
import { PageWrapper, PageTitle, NextPage } from "../../styles";
import { AboutPageContainer, AboutSelf, AboutBio } from "./About.style";
import { Footer } from "../../components/Footer/Footer";
// import Succulent from "../../images/Succulent.png";
// import Self from "../../images/Self.png";

function About(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  document.title = "Jordan Castillo - About";

  return (
    <PageWrapper bgColor={colors.purplegrey} padding="30px 0px ">
      <AboutPageContainer bgUrl="https://jordan-portfolio.s3-us-west-1.amazonaws.com/LowTransparencySucculents.png">
        <div className="About-wrap">
          <PageTitle
            align="center"
            margin="10px auto auto auto"
            color={colors.white}
          >
            About Me
          </PageTitle>

          <AboutSelf
            src="https://jordan-portfolio.s3-us-west-1.amazonaws.com/Self.png"
            alt="image of jordan castillo"
          />
        </div>

        <AboutBio>
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
            Having an innate passion for curiosity, creativity, and reasoning, I
            strive to consistently improve myself and the world that surrounds
            me. My first true inspiration growing up was photography - it was an
            artistic outlet that allowed me to create and strategically bring an
            idea to life. Software development has been an integration of my
            love for creativity and my root desire to methodically overcome
            obstacles. There are pieces of all the things I love sprinkled
            throughout my work. Often my designs are inspired by the nature
            around me, photographs I have taken or ones I admire. The notion
            that I can build tools that will help people and solve problems on a
            large scale is what drives me to rise up the challenges I face and
            constantly learn as much as I can.
          </div>
          <div>
            {" "}
            When I am not writing code, I can be found spending time with my dog
            and family, cozied up reading a book with some coffee, or out
            enjoying some nature. I hope you enjoy taking a look around my
            portfolio, and please don't hesitate to reach out or connect.
          </div>
        </AboutBio>

        <div className="bottom">
          <NextPage
            to="/experience"
            margin="50px auto 0px auto"
            hovercolor={colors.vermilion}
            color={colors.offwhite}
          >
            my experience
          </NextPage>
        </div>
      </AboutPageContainer>
      <Footer left="0px" bottom="-30px" maxwidth="100vw" margintop="0px" />
    </PageWrapper>
  );
}

export default About;
