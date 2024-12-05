import React from 'react'
import '../assets/styles/InicioCli.css';
import empleado1 from '../assets/img/empleado12.jpg';
import empleado2 from '../assets/img/empleado2.jpeg';
import empleado3 from '../assets/img/Empleado3.jpg';
import empleado4 from '../assets/img/empleado4.webp';


function inicioclien() {
  const empleados = [
    {
      nombre: "Empleado 1",
      especialidad: "Especialidad 1",
      imagen: empleado1
    },
    {
      nombre: "Empleado 2",
      especialidad: "Especialidad 2",
      imagen: empleado2
    },
    {
      nombre: "Empleado 3",
      especialidad: "Especialidad 3",
      imagen: empleado3
    },
    {
      nombre: "Empleado 4",
      especialidad: "Especialidad 4",
      imagen: empleado4
    }
  ]

  return (
    <>
      <section className="iniciocli" id="iniciocli">
        <div className="iniciocli-content">
          <h2>¡Bienvenido usuario a ServTIC!</h2>
          <p>¡Aqui podras ver a nuestro equipo de reparaciones con su respectiva informacion!</p>
        </div>
        <div className="iniciocli-grid">
        {empleados.map((empleado, index2) => (
          <div className='iniciocli-card'>
            <img src={empleado.imagen} alt={empleado.nombre} />
            <h3>{empleado.nombre}</h3>
            <p>{empleado.especialidad}</p>
          </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default inicioclien