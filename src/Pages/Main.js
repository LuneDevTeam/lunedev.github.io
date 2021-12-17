import React from "react";
import Footer from "../components/Footer"

class Main extends React.Component {
  render() {
    return(
      <div>
        <div className="title">Home</div>
        <div className="content">Olá Home</div>
        <Footer />
      </div>
    )
  }
}

export default Main;