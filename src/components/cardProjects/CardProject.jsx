import React from "react";
import "../../sass/components/cardProject.sass";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
const CardProject = ({ title, text, urlImage, urlProject, data_project, urlGit}) => {
  const [opacity, setOpacity] = useState(false);
  return (
    <div
      className="project"
      onMouseOver={() => setOpacity(true)}
      onMouseLeave={() => setOpacity(false)}
    >
      <div
        className={
          !opacity
            ? `project-image ${title}`
            : `project-image ${title} OpacityImg`
        }
      ></div>
      <article className="project-article">
        <h1 className="project-article-title">{title}</h1>
        <p className="project-article-text">{text}</p>
        <div className="project-info">
          <div className="project-info-links">
            <a href={urlProject} target="_blank">
              Visualizar
            </a>
            <a href={urlGit} target='_blank'>
              <BsGithub />
            </a>
          </div>
          <span className="project-info-date">{data_project}</span>
        </div>
      </article>
    </div>
  );
};

export default CardProject;
