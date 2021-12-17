import React from "react";
import Footer from "../components/Footer"

class Error extends React.Component {
  render() {
    return(
      <div>
        <div className="content">Error 404</div>
        <Footer />
      </div>
    )
  }
}

export default Error;