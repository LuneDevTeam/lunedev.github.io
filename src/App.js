import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Main from './Pages/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
        <nav className="header">
          <Link className="link-navbar" to="/">Home</Link>
          <Link className="link-navbar" to="/about-us">Sobre Nós</Link>
          <Link className="link-navbar" to="/projects">Projetos</Link>
          <Link className="link-navbar" to="/contact">Contato</Link>
        </nav>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
    </Router>
  );
}

export default App;
