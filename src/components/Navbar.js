import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      click: false,
      setClick: false,
    }
  }

  render() {
    return (
    <nav className="header">
      <ul className="navbar">
        <li><Link className="link-navbar" to="/">Home</Link></li>
        <li><Link className="link-navbar" to="/about-us">Sobre Nós</Link></li>
        <li><Link className="link-navbar" to="/projects">Projetos</Link></li>
        <li><Link className="link-navbar" to="/contact">Contato</Link></li>
      </ul>
    </nav>
    )
  }
}

export default Navbar;