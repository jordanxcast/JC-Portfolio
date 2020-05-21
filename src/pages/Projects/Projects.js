import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import { colors } from "../../constant_styles";
import {
  PageWrapper,
  Section,
  PageTitle,
  NextPage,
  Down,
  BackToTop,
} from "../../styles";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import Folkul from "../../images/Folkul.png";

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  height: fit-content;
  margin: 50px auto 60px;
  justify-content: space-between;

  @media (min-width: 900px) {
    flex-direction: row;
    width: 90%;
  }
  @media (min-width: 1000px) {
    max-width: 1500px;
  }

  .overview-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    width: 50%;
    padding: 30px 0px 20px;
    height: fit-content;
    border-top: none;
    border-bottom: 1px solid ${colors.vermilion};
    @media (min-width: 900px) {
      border-left: none;
      border-right: none;
      border-top: 1px solid ${colors.vermilion};
      border-bottom: 1px solid ${colors.vermilion};
      margin: 30px;
      width: 30%;
    }

    > h2 {
      font-weight: lighter;
      text-align: center;
      width: 100%;
      font-size: 18px;
    }
  }
  .overview-icon {
    color: ${colors.deeperpurple};
  }

  @media (max-width: 300px) {
    font-size: 16px;
    overflow-wrap: break-word;
  }
`;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  document.title = "Jordan Castillo - Projects";

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  //executes scroll to the top of the page
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageWrapper bgColor={colors.lightgrey} padding="30px 0px">
      <PageTitle align="center" padding="30px 10px 10px 10px">
        Projects
      </PageTitle>
      <Overview>
        <div className="overview-content">
          <FontAwesomeIcon
            className="overview-icon"
            icon="draw-polygon"
            size="3x"
          />
          <h2>Intuitive, elegant UX/UI design</h2>
        </div>
        <div className="overview-content">
          <FontAwesomeIcon
            className="overview-icon"
            icon="mobile-alt"
            size="3x"
          />
          <h2>Mobile first, responsivness</h2>
        </div>

        <div className="overview-content">
          <FontAwesomeIcon
            className="overview-icon"
            icon="laptop-code"
            size="3x"
          />
          <h2>Efficient, manageable code</h2>
        </div>
      </Overview>
      <Down className="down" onClick={executeScroll}></Down>
      <Section width="100%" margin="0px">
        <ProjectItem
          refProp={myRef}
          className="project-section"
          proj_title="Folkul"
          img_src={Folkul}
          img_alt="Project called Folkul's Interface"
          repo_href="https://github.com/kraigwilliams/motive-client"
          live_href="https://folkul.now.sh/"
          stack={[
            "React.js",
            "Styled Components",
            "Node.js",
            "Express",
            "Knex",
            "PostgreSQL",
          ]}
          desc="Folkul is a social media concept for users to document, refine, and share sincere ideas."
          subject="This is a tool where users can create a 'Thought' or a 'Topic.' A Thought can be anything from small ideas or memos to the greatest invention- they are any type of idea. A Topic is like a folder of these Thoughts, a way to organize and sort your creations. You can connect to other users and then share your ideas with them - getting criticism, feedback and overall collaboration on the Thoughts and Topics you have created."
          reason="Current social media platforms we have today are based around trivial concepts - from overly saturated selfies to fleeting content with no true substance. The only value this brings to the user is distraction. I created this with the intention of building a social media-esque platform that focuses on sincere ideas rather than a feed of mindless content that is so apparent today."
          comingSoon="Future roadmap: custom user profiles, ReactNative conversion and additional features to improve user experience."
        />

        <ProjectItem
          className="project-section"
          proj_title="Thoughtful Travels"
          img_src="https://jordan-portfolio.s3-us-west-1.amazonaws.com/TT-LandingPage.png"
          img_alt="Project called Thoughtful Travel's Interface"
          repo_href="https://github.com/jordanxcast/thoughtful-travels-client"
          live_href="https://thoughtful-travels.now.sh/"
          stack={[
            "React.js",
            "Context API",
            "Node.js",
            "Express",
            "Knex",
            "PostgreSQL",
            "JWT Authentication",
          ]}
          desc="Thoughtful Travels is a web application for all travel-lovers to set destination travel goals and reflect on their experiences."
          subject="Users can create their own account, create a Destination goal where they set: their destination location, their goal date to visit and goal budget for their trip. For each Destination users can set a list of bucket list items to do at this destination and create journal entries to reflect on their experiences."
          reason="Thoughtful Travels aims to empower it’s users by giving them a place to organize their travel goals, set specific details on their goals and reflect on their experiences so the invaluable memories from their travels are documented."
          comingSoon="Future roadmap: ability to upload photos for destinations, sort and edit existing journal entries."
        />
        <ProjectItem
          className="project-section"
          proj_title="Catalan Cards"
          img_src="https://jordan-portfolio.s3-us-west-1.amazonaws.com/Catalan_Cards_Preview.png"
          img_alt="Project called Catalan Repetition's Interface"
          repo_href="https://github.com/stronghearth/spaced-repetition"
          live_href="https://catalan-repetition.now.sh/register"
          stack={[
            "React.js",
            "Node.js",
            "Context API",
            "Express",
            "Knex",
            "PostgreSQL",
            "Cypress.io",
          ]}
          desc="Catalan Cards is a platform where aspiring polyglots can learn the Catalan language via the spaced repetition technique."
          subject="Following the spaced repetition technique, the words answered incorrectly will be repeated sooner. Furthermore, the more times you answer a word correctly, you will see it less frequently."
          reason="This tool is intended to help users learn a language through a proven and structured technique."
          comingSoon="Future roadmap: ability to choose from different languages, more words to learn for each language, sharing scores and have a score board to keep track of users progress."
        />
      </Section>

      <NextPage
        to="/contact"
        margin="80px auto 10px auto"
        color={colors.blue}
        hovercolor={colors.deeperpurple}
        hoverborder={colors.mint}
      >
        <button type="button">let's collaborate!</button>
      </NextPage>

      {/* {
        <BackToTop
          onClick={scrollTop}
          position="relative"
          background="transparent"
        >
          <FontAwesomeIcon icon="arrow-up" />
        </BackToTop>
      } */}
      <Footer bgcolor={colors.offwhite} bottom="-30px" left="0px" />
    </PageWrapper>
  );
}

export default Projects;
