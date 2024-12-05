import React, { useState } from 'react';
import '../assets/styles/ReparacionesEmpleado.css';

const ReparacionesEmpleado = () => {
  const [reparacionesDisponibles, setReparacionesDisponibles] = useState([
    {
      id: '1',
      dispositivo: 'Laptop Dell XPS',
      detalles: 'Reemplazo de teclado y batería',
      fechaSolicitud: '2024-12-01',
      imagen: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      dispositivo: 'iPhone 12',
      detalles: 'Reemplazo de pantalla',
      fechaSolicitud: '2024-12-03',
      imagen: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      dispositivo: 'Tablet Samsung Galaxy',
      detalles: 'Actualización de software',
      fechaSolicitud: '2024-12-05',
      imagen: 'https://via.placeholder.com/150',
    },
  ]);

  const [reparacionesAsignadas, setReparacionesAsignadas] = useState([]);

  const asignarReparacion = (id) => {
    const reparacion = reparacionesDisponibles.find((r) => r.id === id);
    setReparacionesAsignadas([...reparacionesAsignadas, reparacion]);
    setReparacionesDisponibles(reparacionesDisponibles.filter((r) => r.id !== id));
  };

  return (
    <div className="reparaciones-empleado-container">
      {/* Reparaciones disponibles */}
      <div className="reparaciones-disponibles">
        <h2>Reparaciones Disponibles</h2>
        <div className="reparaciones-list">
          {reparacionesDisponibles.length > 0 ? (
            reparacionesDisponibles.map((reparacion) => (
              <div className="reparacion-card" key={reparacion.id}>
                <img src={reparacion.imagen} alt={reparacion.dispositivo} className="reparacion-imagen" />
                <div className="reparacion-detalles">
                  <h3>{reparacion.dispositivo}</h3>
                  <p><strong>Detalles:</strong> {reparacion.detalles}</p>
                  <p><strong>Fecha de solicitud:</strong> {reparacion.fechaSolicitud}</p>
                  <button
                    className="btn-asignar"
                    onClick={() => asignarReparacion(reparacion.id)}
                  >
                    Asignar a mí
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay reparaciones disponibles.</p>
          )}
        </div>
      </div>

      {/* Mis reparaciones */}
      <div className="reparaciones-asignadas">
        <h2>Mis Reparaciones</h2>
        <div className="reparaciones-list">
          {reparacionesAsignadas.length > 0 ? (
            reparacionesAsignadas.map((reparacion) => (
              <div className="reparacion-card" key={reparacion.id}>
                <img src={reparacion.imagen} alt={reparacion.dispositivo} className="reparacion-imagen" />
                <div className="reparacion-detalles">
                  <h3>{reparacion.dispositivo}</h3>
                  <p><strong>Detalles:</strong> {reparacion.detalles}</p>
                  <p><strong>Fecha de solicitud:</strong> {reparacion.fechaSolicitud}</p>
                  <p><strong>Estado:</strong> En Proceso</p>
                </div>
              </div>
            ))
          ) : (
            <p>No tienes reparaciones asignadas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReparacionesEmpleado;


