import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import { colors } from "../../constant_styles";
import { PageWrapper, Section, PageTitle, NextPage, Down } from "../../styles";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ThoughtfulTravels from "../../images/ThoughtfulTravels1.png";
import CatalanRepetition from "../../images/CatalanRepetition.png";
import Folkul from "../../images/Folkul.png";

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  margin: 50px auto 20px;
  justify-content: space-between;

  @media (min-width: 800px) {
    flex-direction: row;
    width: 90%;
  }

  .overview-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 80%;
    padding: 30px 0px 20px;
    border-top: 1px solid ${colors.vermilion};
    border-bottom: 1px solid ${colors.vermilion};
    @media (min-width: 800px) {
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
`;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <PageWrapper bgColor={colors.lightgrey} padding="30px 0px">
      <PageTitle align="center" padding="30px 10px 10px 0px">
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
          stack={["React.js", "Node.js", "Express", "Knex", "PostgreSQL"]}
          desc="Folkul is a social media concept for users to "
          subject=""
        />

        <ProjectItem
          className="project-section"
          proj_title="Thoughtful Travels"
          img_src={ThoughtfulTravels}
          img_alt="Project called Thoughtful Travel's Interface"
          repo_href="https://github.com/jordanxcast/thoughtful-travels-client"
          live_href="https://thoughtful-travels-7oleygwkt.now.sh"
          stack={["React.js", "Node.js", "Express", "Knex", "PostgreSQL"]}
          desc="Thoughtful Travels is a web application for users to set destination travels goal and reflect on their experience. "
          subject="Thoughtful Travels aims to empower it’s users by giving them a place to organize their travel goals, set specific details on their goals and reflect on their experiences so the invaluable memories from their travels are documented."
        />
        <ProjectItem
          className="project-section"
          proj_title="Catalan Repetition"
          img_src={CatalanRepetition}
          img_alt="Project called Catalan Repetition's Interface"
          repo_href="https://github.com/stronghearth/spaced-repetition7"
          live_href="https://catalan-repetition.now.sh/register"
          stack={["React.js", "Node.js", "Express", "Knex", "PostgreSQL"]}
          desc="Catalan Repetition is a platform where users can practice learning the Catalan language via the spaced repetition technique."
          subject="Folowing the spaced repetition technique, the words you answer incorrectly will be repeated sooner and the more times you answer a word correctly, you will see it less frequently."
        />
      </Section>

      <NextPage
        to="/contact"
        margin="80px auto 10px auto"
        hovercolor={colors.vermilion}
      >
        let's collaborate!
      </NextPage>
      <Footer bgcolor={colors.offwhite} bottom="-30px" left="0px" />
    </PageWrapper>
  );
}

export default Projects;
