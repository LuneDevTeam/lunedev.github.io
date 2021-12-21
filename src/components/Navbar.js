import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import stock from '../images/stockIMG.jpg';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

    return (
    <div className="header">
      <div className='navbar'>
        <img src={stock} alt="lune-logo" className="logo-navbar"/>
        <Link to='#' className="menu-bars">
          <FaIcons.FaBars onClick={ showSidebar }/>
        </Link>
      </div>
      <nav className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="links-navbar"><Link className="nav-buttons" to="/">Home</Link></li>
          <li className="links-navbar"><Link className="nav-buttons" to="/about-us">Sobre Nós</Link></li>
          <li className="links-navbar"><Link className="nav-buttons" to="/projects">Projetos</Link></li>
          <li className="links-navbar"><Link className="nav-buttons" to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </div>
    )
  }

export default Navbar;