import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import '../assets/styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className="container">
          <nav className="navbar">
            {/* Logo y Toggle Menu juntos */}
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
              <h2>ServiTIC</h2>
              <div className="toggle-menu" onClick={toggleMenu}>
                ☰
              </div>
            </div>

            {/* Menú de navegación */}
            <ul className={menuOpen ? 'show-menu' : ''}>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/">Acerca de nosotros</Link>
              </li>
              <li>
                <Link to="/">Servicios</Link>
              </li>
              <li>
                <Link to="/">Contacto</Link>
              </li>
            </ul>

            {/* Botón de Login */}
            <div className="login">
              <Link to="/">
                <button>Iniciar Sesión</button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
