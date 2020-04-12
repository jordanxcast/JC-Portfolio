import React, { useEffect } from "react";
import { PageWrapper, PageTitle, NextPage } from "../../styles";
import {
  Skills,
  Skill,
  ExperienceSection,
  ExperienceItem,
} from "./Experience.style";
import { colors } from "../../constant_styles";

function Experience(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  });
  const skills = [
    "Html5",
    "CSS",
    "JavaScript",
    "ES6",
    "Babel",
    "React",
    "Node",
    "Express",
    "Jest",
    "Enzyme",
    "SQL",
    "Webpack",
    "PostgreSQL",
    "SCRUM",
    "Git",
    "GitHub",
  ];

  return (
    <PageWrapper bgColor={colors.slategrey}>
      <PageTitle color={colors.lightgrey} margin="auto auto 20px auto">
        Experience
      </PageTitle>

      <ExperienceSection className="Experience_skills">
        <ExperienceItem
          company="Thinkful"
          position="Apprenticeship"
          duration="Oct. 2019 - April 2020"
        />
      </ExperienceSection>

      <Skills>
        <h2 style={{ margin: "10px", color: colors.darkpurple }}>Skills</h2>
        <div className="skills-container">
          {skills.map((skll) => {
            return <Skill>{skll}</Skill>;
          })}
        </div>
      </Skills>

      <NextPage to="/about" margin="35% auto 10px auto" top="90%">
        about me
      </NextPage>
    </PageWrapper>
  );
}

export default Experience;
