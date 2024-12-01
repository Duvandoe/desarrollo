import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import '../assets/styles/Login.css';
import logo from '../assets/img/logo-Photoroom (1).png'; // Asegúrate de que el logo esté en la carpeta correcta.

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario, validar usuario, etc.
    console.log("Email:", email);
    console.log("Password:", password);
    navigate('/dashboard'); // Redirige a la página de dashboard después de iniciar sesión
  };

  return (
    <section className="login" id="login">
      <div className="login-container">
        <div className="login-header">
          <img src={logo} alt="Logo ServTIC" className="login-logo" />
          <h2>¡Ingresa a ServTIC!</h2>
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn-login">Iniciar sesión</button>
            <p>¿No tienes una cuenta? <a href="/registro">Registrate</a></p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
