import React from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

class Projects extends React.Component {
  render() {
    return(
      <div>
        <div className="title">Projetos</div>
        <div className="content">
          <div className="projects-container">
            {
              projectsData.map((project) => (
                <ProjectCard
                  key={ project.id }
                  image={ project.image }
                  name={ project.name }
                  description={ project.description }
                />
              ))
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Projects;