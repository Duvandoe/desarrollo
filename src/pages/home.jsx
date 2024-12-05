import React from 'react';
import logo from '../assets/img/logo-Photoroom (1).png';
import Inicio from './inicio';
import Servicio from './servicio';
import Contacto from './contacto';

function home() {
  return (
    <>
        <section className="inicio" id="inicio">
            <div className="inicio-img">
                <img src={logo} alt="LOGO"/>
            </div>
            <div className="inicio-content">
                <h3>¡Bienvenido a ServTIC!</h3>
                <h1>Aqui podras encontrar todo lo que necesitas en reparaciones de equipos electronicos</h1>
            </div>
        </section>
        <Inicio />
        <Servicio />
        <Contacto />
    </>
    
  )
}

export default home;