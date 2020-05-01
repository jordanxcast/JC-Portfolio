import React, { useEffect, useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import { PageWrapper, PageTitle, NextPage } from "../../styles";
import {
  Skills,
  Skill,
  ExperienceSection,
  ExperienceItem,
} from "./Experience.style";
import { colors } from "../../constant_styles";
import { PortfolioContext } from "../../PortfolioContext";

function Experience(props) {
  const { experienceItems } = useContext(PortfolioContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  document.title = "Jordan Castillo - Experience";
  const skills = [
    "Html5",
    "CSS3",
    "Styled Components",
    "JavaScript",
    "ES6",
    "Babel",
    "React",
    "Context API",
    "Node",
    "RESTful APIs",
    "Express",
    "Knex",
    "PostgreSQL",
    "CRUD Methodology",
    "Jest",
    "Enzyme",
    "SQL",
    "Webpack",
    "SCRUM",
    "Agile",
    "Git",
    "GitHub",
    "Figma",
    "Trello",
    "Jira",
  ];

  return (
    <PageWrapper bgColor={colors.slategrey} padding="30px 0px">
      <PageTitle color={colors.lightgrey} margin="auto auto 20px auto">
        Experience
      </PageTitle>

      <ExperienceSection className="Experience_skills">
        {experienceItems.map((exp) => (
          <ExperienceItem
            key={exp.id}
            company={exp.company}
            position={exp.position}
            duration={exp.duration}
            expanded={exp.expanded}
          />
        ))}
      </ExperienceSection>

      <Skills>
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skll, idx) => {
            return <Skill key={idx}>{skll}</Skill>;
          })}
        </div>
      </Skills>

      <NextPage
        to="/projects"
        margin="80px auto 10px auto"
        top="20%"
        hovercolor={colors.teal}
        color={colors.paleblue}
      >
        my recent projects
      </NextPage>

      <Footer bottom="-30px" icons="show" left="0px" />
    </PageWrapper>
  );
}

export default Experience;
