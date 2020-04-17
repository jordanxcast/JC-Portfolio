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
  const [skills, setSkills] = useState(false);

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
        <ProjectImage src={props.img_src} alt={props.img_alt} />

        <div className="project-details">
          <ProjectDesc>
            <div className="description">
              {props.desc}
              <br />
              <span> {props.subject}</span>
            </div>
          </ProjectDesc>
          <ProjectTech className="cl-effect-1">
            <ProjectLink
              href={props.repo_href}
              target="_blank"
              className="repo"
            >
              Repo
            </ProjectLink>
            <ProjectLink href={props.live_href} target="_blank">
              Live
            </ProjectLink>

            <div className="tech">
              <button
                className={skills ? "tech-btn closed" : "tech-btn "}
                onClick={() => setSkills(!skills)}
              >
                <FontAwesomeIcon icon="chevron-circle-right" size="1.6x" />
              </button>
              <p>Tech</p>
            </div>
          </ProjectTech>
          <div className="skills">
            {skills &&
              props.stack.map((item) => (
                <Skill
                  color={colors.black}
                  margin="5px 0px 5px 10px"
                  fontsize="12px"
                >
                  {item}
                </Skill>
              ))}
          </div>
        </div>
      </div>
    </ProjectItemWrapper>
  );
}

export default ProjectItem;
