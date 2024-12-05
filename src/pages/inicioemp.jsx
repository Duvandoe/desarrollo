import React from 'react';
import '../assets/styles/InicioEmp.css';
import tarea1 from '../assets/img/tarea1.webp';
import tarea2 from '../assets/img/tarea2.jpg';
import tarea3 from '../assets/img/tarea3.jpeg';
import tarea4 from '../assets/img/tarea4.jpg';

function InicioEmp() {
  const tareasDestacadas = [
    {
      nombre: "Revisión de Laptop HP",
      estado: "Pendiente",
      imagen: tarea1
    },
    {
      nombre: "Reparación de iPhone 11",
      estado: "En Proceso",
      imagen: tarea2
    },
    {
      nombre: "Mantenimiento de Disco duro",
      estado: "Pendiente",
      imagen: tarea3
    },
    {
      nombre: "Actualización de Software en Samsumg A11",
      estado: "Completada",
      imagen: tarea4
    }
  ];

  return (
    <>
      <section className="inicioemp" id="inicioemp">
        <div className="inicioemp-content">
          <h2>¡Bienvenido Empleado de ServTIC!</h2>
          <p>Aquí podrás visualizar las tareas asignadas, reportar avances y colaborar con tu equipo para ofrecer un excelente servicio.</p>
        </div>
        <div className="inicioemp-grid">
          {tareasDestacadas.map((tarea, index) => (
            <div className="inicioemp-card" key={index}>
              <img src={tarea.imagen} alt={tarea.nombre} />
              <h3>{tarea.nombre}</h3>
              <p><strong>Estado:</strong> {tarea.estado}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default InicioEmp;
