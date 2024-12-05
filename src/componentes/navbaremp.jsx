import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import perfil2 from '../assets/img/perfilempleado.avif';
import '../assets/styles/NavbarEmp.css';



function Navbaremp() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div>
          <nav className="navbar-empleado">
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
                <Link to="#">Inicio</Link>
              </li>
              <li>
                <a href="#">Reparaciones</a>
              </li>
            </ul>

            {/* Botón de Login */}
            <div className="boton-logout">
            <img src={perfil2} alt="Foto de usuario" className="user-photo" />
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

export default Navbaremp