import React, { useEffect } from "react";
import { colors } from "../../constant_styles";
import { PageWrapper, Section, PageTitle } from "../../styles";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageWrapper bgColor={colors.paleblue}>
      <PageTitle>Projects</PageTitle>

      <Section>
        <ProjectItem
          proj_title="Thoughtful Travels"
          img_src=""
          img_alt="Project Interface"
          repo_href=""
          stack=""
          desc="Description"
        />
        <ProjectItem
          proj_title="Spaced Repetition"
          img_src=""
          img_alt="Project Interface"
          repo_href=""
          stack=""
          desc="Description"
        />
        <ProjectItem
          proj_title="Capstone III"
          img_src=""
          img_alt="Project Interface"
          repo_href=""
          stack=""
          desc="Description"
        />
      </Section>
    </PageWrapper>
  );
}

export default Projects;
