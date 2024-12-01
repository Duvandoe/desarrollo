import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';
import logo from '../assets/img/logo-Photoroom (1).png'; // Asegúrate de que el logo esté en la carpeta correcta.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario, validar usuario, etc.
    console.log("Email:", email);
    console.log("Password:", password);
    navigate('/dashboard'); // Redirige a la página de dashboard después de iniciar sesión
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
              <div className="input-with-icon">
                <i className="fas fa-envelope"></i>
                <input 
                  type="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-with-icon">
                <i className="fas fa-lock"></i>
                <input 
                  type={passwordVisible ? "text" : "password"} 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <button type="submit" className="btn-login">
              <i className="fas fa-sign-in-alt"></i> Iniciar sesión
            </button>
            <p className="register-link">¿No tienes una cuenta? <a href="/registro">Registrate</a></p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;


