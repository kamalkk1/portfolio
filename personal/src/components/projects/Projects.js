import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
        <a href="https://xboardkk.netlify.app/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Blog Website"
            category="Website"
            image={workImgThree}
          />
          </a>
          <a href="https://steady-gnome-39cc66.netlify.app" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Spotify Clone"
            category="Design"
            image={workImgOne}
          />
          </a>
          <a href="https://admin-uibykamal.netlify.app" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Admin Ui"
            category="DashBoard"
            image={workImgTwo}
          />
          </a>
          <a href="https://subtle-crostata-4d17c2.netlify.app/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
          </a>
         
        </div>
        <div className="px-6">
          <a href="https://qkartkk.netlify.app/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          </a>
          <a href="https://xflixclone.netlify.app" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Youtube Clone"
            category="Design"
            image={workImgSix}
          />
          </a>
          
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;