import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import perfil from '../assets/img/fotoperfil.jpg';
import '../assets/styles/NavbarClien.css';


function Navbarcli() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div>
          <nav className="navbar-cliente">
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
                <Link to="/inicioclien">Inicio</Link>
              </li>
              <li>
                <a href="/reparaciones">Reparaciones</a>
              </li>
            </ul>

            {/* Botón de Login */}
            <div className="boton-logout">
            <img src={perfil} alt="Foto de usuario" className="user-photo" />
              <Link to="/">
                <button>Cerrar Sesión</button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbarcli