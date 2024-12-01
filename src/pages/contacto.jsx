import React from 'react'
import '../assets/styles/Contacto.css';

function contacto() {
  return (
    <>
        <div className="linea"></div>
        <section className="contacto" id="contacto">
      <div className="contacto-header">
        <h2>Contáctanos</h2>
        <p>¿Tienes alguna consulta o necesitas ayuda? ¡Estamos aquí para ayudarte!</p>
      </div>
      <div className="contacto-content">
        <form className="contacto-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
        <div className="contacto-info">
          <h3>Información de contacto</h3>
          <p><b>Teléfono:</b> +57 (601) 563 1283</p>
          <p><b>Correo:</b> contacto@servtic.com</p>
          <p><b>Dirección:</b> Cra. 56a #2a-51, Ciudad Buenaventura, Colombia</p>
          <p><b>Horario:</b> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
          <div className="contacto-mapa">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961.406317624353!2d-77.01675117015843!3d3.8736998970778997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e373b0b3cd3b175%3A0x2d0fbd38ff9c04a!2sBuenaventura!5e0!3m2!1ses-419!2sco!4v1733093004883!5m2!1ses-419!2sco" 
            width="500" 
            height="350" 
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default contacto