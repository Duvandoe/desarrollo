import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/EmpleadoProfile.css'; // Para los estilos del cliente
import Sidebar from '../componentes/sidebar';

const EmpleadoProfile = () => {
  // Lista de empleados
  const empleados = [
    {
      idEmpleado: '12345',
      nombre: 'Feliciano',
      cargo: 'Reparaciones de Computadoras',
      salario: '50000',
      idUsuario: '1'
    },
    {
      idEmpleado: '67890',
      nombre: 'Maximiliano',
      cargo: 'Reparaciones de Celulares',
      salario: '30000',
      idUsuario: '2'
    }
  ];

  // Estado para manejar el modal
  const [showModal, setShowModal] = useState(false);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);

  // Abrir modal y seleccionar empleado
  const openModal = (empleado) => {
    setSelectedEmpleado(empleado);
    setShowModal(true);
  };

  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedEmpleado(null);
  };

  return (
    <div className="client-dashboard">
      <Sidebar />
      <div className="client-profile">
        <h1 className="client-title">Perfiles de Empleados</h1>

        <div className="clients-list">
          <table className="client-table">
            <thead>
              <tr>
                <th>ID de Empleado</th>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Salario</th>
                <th>ID de Usuario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => (
                <tr key={empleado.idEmpleado}>
                  <td>{empleado.idEmpleado}</td>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.cargo}</td>
                  <td>{empleado.salario}</td>
                  <td>{empleado.idUsuario}</td>
                  <td>
                    <button
                      onClick={() => openModal(empleado)}
                      className="btn"
                    >
                      Editar Empleado
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal de edición */}
        {showModal && selectedEmpleado && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Editar Información del Empleado</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    value={selectedEmpleado.nombre}
                    onChange={(e) => {
                      const updatedEmpleado = { ...selectedEmpleado, nombre: e.target.value };
                      setSelectedEmpleado(updatedEmpleado);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cargo">Cargo:</label>
                  <input
                    type="text"
                    id="cargo"
                    value={selectedEmpleado.cargo}
                    onChange={(e) => {
                      const updatedEmpleado = { ...selectedEmpleado, cargo: e.target.value };
                      setSelectedEmpleado(updatedEmpleado);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salario">Salario:</label>
                  <input
                    type="number"
                    id="salario"
                    value={selectedEmpleado.salario}
                    onChange={(e) => {
                      const updatedEmpleado = { ...selectedEmpleado, salario: e.target.value };
                      setSelectedEmpleado(updatedEmpleado);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="idUsuario">ID de Usuario:</label>
                  <input
                  disabled
                    type="text"
                    id="idUsuario"
                    value={selectedEmpleado.idUsuario}
                    onChange={(e) => {
                      const updatedEmpleado = { ...selectedEmpleado, idUsuario: e.target.value };
                      setSelectedEmpleado(updatedEmpleado);
                    }}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn">Guardar Cambios</button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={closeModal}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmpleadoProfile;
