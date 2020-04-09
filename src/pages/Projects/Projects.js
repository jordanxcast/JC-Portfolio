import React, { useEffect } from "react";
import { colors } from "../../constant_styles";
import { PageWrapper, Section, PageTitle, NextPage } from "../../styles";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PageWrapper bgColor={colors.offwhite}>
      <PageTitle>Projects</PageTitle>

      <Section width="100%">
        <ProjectItem
          proj_title="Thoughtful Travels"
          img_src=""
          img_alt="Project called Thoughtful Travel's Interface"
          repo_href=""
          stack=""
          desc="Description"
        />
        <ProjectItem
          proj_title="Catalan Repetition"
          img_src=""
          img_alt="Project called Catalan Repetition's Interface"
          repo_href=""
          stack=""
          desc="Description"
        />
        <ProjectItem
          proj_title="Folkul"
          img_src=""
          img_alt="Project called Folkul's Interface"
          repo_href=""
          stack=""
          desc="Description"
        />
      </Section>

      <NextPage
        to="/experience"
        margin="10% auto 10px auto"
        hovercolor={colors.deeppurple}
      >
        experience
      </NextPage>
    </PageWrapper>
  );
}

export default Projects;
