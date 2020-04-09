import React from "react";
import {
  ProjectTitle,
  ProjectImage,
  ProjectTech,
  ProjectDesc,
  ProjectLink,
  ProjectItemWrapper,
} from "./ProjectItem.style";

function ProjectItem(props) {
  return (
    <ProjectItemWrapper>
      <ProjectTitle>{props.proj_title}</ProjectTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProjectImage src={props.img_src} alt={props.img_alt} />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            width: "100%",
          }}
        >
          <ProjectTech>
            <ProjectLink href={props.repo_href}>Repo</ProjectLink>
            <ProjectLink href={props.live_href}>Live</ProjectLink>
            <p style={{ marginTop: "0px" }}> Tech </p>
            <div>{props.stack}</div>
          </ProjectTech>

          <ProjectDesc>{props.desc}</ProjectDesc>
        </div>
      </div>
    </ProjectItemWrapper>
  );
}

export default ProjectItem;
