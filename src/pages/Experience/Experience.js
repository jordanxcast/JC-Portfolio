import React from "react";
import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";
import { PageWrapper, PageTitle } from "../../styles";
import { Skills, ExperienceSection } from "./Experience.style";
import { colors } from "../../constant_styles";

function Experience(props) {
  return (
    <PageWrapper bgColor={colors.slategrey}>
      <PageTitle color={colors.offwhite} margin="70px auto 20px auto">
        Experience
      </PageTitle>

      <Skills>
        <h2 style={{ margin: "0px", color: colors.teal }}>Skills</h2>
        <p style={{ margin: "0px" }}>
          Html5, CSS, JavaScript, ES6, Babel, React, Node, Express, Jest,
          Enzyme, SQL, Webpack, PostgreSQL, SCRUM, Git, GitHub
        </p>
      </Skills>

      <ExperienceSection className="Experience_skills">
        <ExperienceItem
          company="Thinkful"
          position="Apprenticeship"
          duration="Oct. 2019 - April 2020"
        />
      </ExperienceSection>
    </PageWrapper>
  );
}

export default Experience;
