import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../componentes/sidebar';

const EditEmpleado = () => {
  const { idEmpleado } = useParams();
  const navigate = useNavigate();

  // Datos del empleado (normalmente provendrían de una base de datos)
  const [empleado, setEmpleado] = useState({
    idEmpleado: idEmpleado,
    nombre: '',
    cargo: '',
    salario: '',
    idUsuario: ''
  });

  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({
      ...empleado,
      [name]: value
    });
  };

  // Función para enviar el formulario de edición (simulación)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Empleado editado:', empleado);
    navigate('/gestordeempleado');
  };

  // Mostrar el modal
  const openModal = () => {
    setShowModal(true);
  };

  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="client-dashboard">
      <Sidebar />
      <div className="client-profile">
        <h1 className="client-title">Editar Empleado</h1>

        {/* Botón para abrir el modal */}
        <button onClick={openModal} className="btn">Editar Empleado</button>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Editar Información del Empleado</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={empleado.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cargo">Cargo:</label>
                  <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    value={empleado.cargo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="salario">Salario:</label>
                  <input
                    type="number"
                    id="salario"
                    name="salario"
                    value={empleado.salario}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="idUsuario">ID de Usuario:</label>
                  <input
                    type="text"
                    id="idUsuario"
                    name="idUsuario"
                    value={empleado.idUsuario}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn">Guardar Cambios</button>
                  <button type="button" className="btn-cancel" onClick={closeModal}>Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditEmpleado;


