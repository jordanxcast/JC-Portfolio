import React, { useState } from "react";
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
      <ProjectTitle>{props.proj_title}</ProjectTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="tech-wrapper"
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
            <ProjectLink href={props.repo_href} target="_blank">
              Repo
            </ProjectLink>
            <ProjectLink href={props.live_href} target="_blank">
              Live
            </ProjectLink>
            <div style={{ marginTop: "0px", display: "flex" }} className="tech">
              <button
                className={skills ? "tech-btn closed" : "tech-btn "}
                onClick={() => setSkills(!skills)}
              >
                {" "}
                >
              </button>{" "}
              <p>Tech</p>
            </div>
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
          </ProjectTech>

          <ProjectDesc>
            <div className="description">
              {props.desc}
              <span> {props.subject}</span>
            </div>
          </ProjectDesc>
        </div>
      </div>
    </ProjectItemWrapper>
  );
}

export default ProjectItem;
