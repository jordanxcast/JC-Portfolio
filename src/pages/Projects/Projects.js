import React, { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { colors } from "../../constant_styles";
import { PageWrapper, Section, PageTitle, NextPage } from "../../styles";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ThoughtfulTravels from "../../images/ThoughtfulTravels1.png";
import CatalanRepetition from "../../images/CatalanRepetition.png";
import Folkul from "../../images/Folkul.png";

function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PageWrapper bgColor={colors.lightgrey} padding="30px 0px">
      <PageTitle align="center" padding="30px 10px 10px 0px">
        Projects
      </PageTitle>

      <Section width="100%" margin="0px">
        <ProjectItem
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
        to="/experience"
        margin="10% auto 10px auto"
        hovercolor={colors.deeppurple}
      >
        experience
      </NextPage>
      <Footer bgcolor={colors.offwhite} bottom="-30px" left="0px" />
    </PageWrapper>
  );
}

export default Projects;
