import React from "react";
import Footer from "../components/Footer"


class About extends React.Component {
  render() {
    return(
      <div>
        <div className="title">Sobre Nós</div>
        <div className="content">Olá About</div>
        <Footer />
      </div>
    )
  }
}

export default About;