import React from 'react';
import '../assets/styles/Servicio.css';
import desarrolloweb from '../assets/img/WhatsApp Image 2024-12-01 at 5.56.03 PM.jpeg';
import integracion from '../assets/img/WhatsApp Image 2024-12-01 at 5.56.08 PM.jpeg';
import aplicaciones from '../assets/img/WhatsApp Image 2024-12-01 at 5.56.13 PM.jpeg';
import consultoria from '../assets/img/WhatsApp Image 2024-12-01 at 5.55.44 PM.jpeg';
import desarrollosof from '../assets/img/WhatsApp Image 2024-12-01 at 5.55.52 PM.jpeg';
import soporte from '../assets/img/WhatsApp Image 2024-12-01 at 5.55.57 PM.jpeg';

function Servicio() {
  const servicios = [
    {
      titulo: 'Desarrollo de Software',
      descripcion:
        'Brindamos soluciones personalizadas para el desarrollo de software a medida que se adaptan a las necesidades específicas de su empresa.',
      imagen: desarrollosof, // Cambia esto a tu ruta real
    },
    {
      titulo: 'Consultoría Tecnológica',
      descripcion:
        'Ofrecemos consultoría para ayudar a su empresa a optimizar sus procesos y adoptar las mejores prácticas tecnológicas.',
      imagen: consultoria,
    },
    {
      titulo: 'Soporte Técnico',
      descripcion:
        'Proporcionamos soporte técnico continuo para garantizar que sus sistemas y aplicaciones funcionen sin problemas.',
      imagen: soporte,
    },
    {
      titulo: 'Desarrollo Web',
      descripcion:
        'Creamos sitios web atractivos y funcionales que se adaptan a las necesidades de su negocio y mejoran su presencia en línea.',
      imagen: desarrolloweb,
    },
    {
      titulo: 'Integración de Sistemas',
      descripcion:
        'Facilitamos la integración de diversos sistemas para optimizar la comunicación y el flujo de datos dentro de su organización.',
      imagen: integracion,
    },
    {
      titulo: 'Aplicaciones Móviles',
      descripcion:
        'Desarrollamos aplicaciones móviles intuitivas y funcionales que mejoran la interacción con sus usuarios y clientes.',
      imagen: aplicaciones,
    },
  ];

  return (
    <>
    <div className="linea"></div>
    <section className="servicio" id="servicio">
      <div className="servicio-header">
        <h3>Servicios</h3>
        <p>
          En ServiTIC, ofrecemos soluciones innovadoras diseñadas para satisfacer
          las necesidades tecnológicas de nuestros clientes. Nuestro equipo de
          expertos está comprometido a brindar servicios rápidos, confiables y
          personalizados.
        </p>
      </div>
      <div className="servicio-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <img src={servicio.imagen} alt={servicio.titulo} />
            <h4>{servicio.titulo}</h4>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Servicio;
