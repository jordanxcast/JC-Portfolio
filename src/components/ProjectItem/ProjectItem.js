import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProjectTitle,
  ProjectImage,
  ProjectTech,
  ProjectDesc,
  ProjectLink,
  ProjectItemWrapper,
} from "./ProjectItem.style";
import { Skill } from "../../pages/Experience/Experience.style";
import { colors } from "../../constant_styles";

function ProjectItem(props) {
  return (
    <ProjectItemWrapper>
      <ProjectTitle ref={props.refProp}>{props.proj_title}</ProjectTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="tech-wrapper"
      >
        <div className="project-links">
          <ProjectLink href={props.repo_href} target="_blank">
            Repo
          </ProjectLink>
          <ProjectLink href={props.live_href} target="_blank">
            Live
          </ProjectLink>
        </div>
        <ProjectImage src={props.img_src} alt={props.img_alt} />

        <div className="project-details">
          <ProjectDesc>
            <div className="description">
              <p>{props.desc}</p>
              <br />
              <p> {props.subject}</p>
              <br />
              <p>{props.reason}</p>
              <br />
              <p>{props.comingSoon}</p>
            </div>
          </ProjectDesc>
          <ProjectTech className="cl-effect-1">
            <div className="tech">
              <p>Tech</p>
              <div className="skills">
                {props.stack.map((item, idx) => (
                  <Skill
                    key={idx}
                    color={colors.black}
                    margin="5px 0px 5px 10px"
                    fontsize="14px"
                  >
                    {item}
                  </Skill>
                ))}
              </div>
            </div>
          </ProjectTech>
        </div>
      </div>
    </ProjectItemWrapper>
  );
}

export default ProjectItem;
