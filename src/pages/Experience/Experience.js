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
  console.log(experienceItems, "!!!");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const skills = [
    "Html5",
    "CSS",
    "Styled Components",
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
        <h2 style={{ margin: "50px 10px 10px 10px", color: colors.vermilion }}>
          Skills
        </h2>
        <div className="skills-container">
          {skills.map((skll, idx) => {
            return <Skill key={idx}>{skll}</Skill>;
          })}
        </div>
      </Skills>

      <NextPage to="/about" margin="35% auto 10px auto" top="20%">
        about me
      </NextPage>

      <Footer bottom="-30px" icons="show" left="0px" />
    </PageWrapper>
  );
}

export default Experience;
