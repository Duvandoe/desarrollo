import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // usa useNavigate
import Sidebar from '../componentes/sidebar';

const EditEmpleado = () => {
  const { idEmpleado } = useParams(); // Obtiene el id del empleado desde la URL
  const navigate = useNavigate(); // Hook para navegar

  // Datos del empleado, normalmente estos provendrían de una base de datos
  const [empleado, setEmpleado] = useState({
    idEmpleado: idEmpleado,
    nombre: '',
    cargo: '',
    salario: '',
    idUsuario: ''
  });

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
    // Aquí enviarías los datos al backend para actualizarlos
    console.log('Empleado editado:', empleado);
    // Redirigir después de la edición
    navigate('/gestordeempleado'); // Cambiar history.push por navigate
  };

  return (
    <div className="client-dashboard">
      <Sidebar />
      <div className="client-profile">
        <h1 className="client-title">Editar Empleado</h1>

        {/* Formulario de Edición */}
        <div className="edit-form">
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
              <button type="button" className="btn-cancel" onClick={() => navigate('/gestordeempleado')}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmpleado;

