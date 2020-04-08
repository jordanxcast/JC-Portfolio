import React from "react";
import {
  ProjectTitle,
  ProjectImage,
  ProjectTech,
  ProjectDesc,
  ProjectLink,
} from "./ProjectItem.style";

function ProjectItem(props) {
  return (
    <>
      <ProjectTitle>{props.proj_title}</ProjectTitle>
      <div style={{ display: "flex", margin: "auto", alignItems: "center" }}>
        <ProjectImage src={props.img_src} alt={props.img_alt} />
      </div>

      <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
        <ProjectTech>
          <ProjectLink href={props.repo_href}>Repo</ProjectLink>
          <ProjectLink href={props.live_href}>Live</ProjectLink>
          <p style={{ marginTop: "0px" }}> Tech </p>
          <div>{props.stack}</div>
        </ProjectTech>

        <ProjectDesc>{props.desc}</ProjectDesc>
      </div>
    </>
  );
}

export default ProjectItem;
