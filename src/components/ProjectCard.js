import React from "react";

class ProjectCard extends React.Component {
  render() {
    const { image, name, description } = this.props;
    return (
      <div className="project">
        <div className="projectIMG">
          <img className="project-image" src={ image } alt={ `${ image } imagem` }  />
        </div>
        <div>
          <h1 className="project-name">{ name }</h1>
          <p className="project-description"> { description }</p>
        </div>
      </div>
    )
  }
}

export default ProjectCard;