import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../componentes/sidebar';
import '../assets/styles/ClientProfile.css'; // Para los estilos del cliente

const ClientProfile = () => {
  // Lista de clientes
  const clients = [
    {
      codigo: '12345',
      direccion: 'Calle Ficticia 123, Ciudad Ejemplo',
      fechaNacimiento: '1990-05-12',
      genero: 'Masculino',
      telefono: '123-456-7890',
      idUsuario: '1',
    },
    {
      codigo: '67890',
      direccion: 'Avenida Principal 456, Ciudad Modelo',
      fechaNacimiento: '1985-08-25',
      genero: 'Femenino',
      telefono: '987-654-3210',
      idUsuario: '2',
    }
  ];

  // Estado para manejar el modal y el cliente seleccionado
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  // Abrir el modal y pasar el cliente seleccionado
  const openModal = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  // Cerrar el modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedClient(null);
  };

  // Manejar el cambio de los campos del cliente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedClient({
      ...selectedClient,
      [name]: value,
    });
  };

  // Manejar la edición del cliente
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cliente actualizado:', selectedClient);
    // Aquí enviaría los datos al backend para actualizar el cliente
    closeModal();
  };

  return (
    <div className="client-dashboard">
      <Sidebar />
      <div className="client-profile">
        <h1 className="client-title">Perfiles de Clientes</h1>

        <div className="clients-list">
          <table className="client-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Dirección</th>
                <th>Fecha de Nacimiento</th>
                <th>Género</th>
                <th>Teléfono</th>
                <th>ID de Usuario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.codigo}>
                  <td>{client.codigo}</td>
                  <td>{client.direccion}</td>
                  <td>{client.fechaNacimiento}</td>
                  <td>{client.genero}</td>
                  <td>{client.telefono}</td>
                  <td>{client.idUsuario}</td>
                  <td>
                    <button onClick={() => openModal(client)} className="btn">
                      Editar Cliente
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de edición */}
      {showModal && selectedClient && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Editar Información del Cliente</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="codigo">Código:</label>
                <input
                  type="text"
                  id="codigo"
                  name="codigo"
                  value={selectedClient.codigo}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección:</label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={selectedClient.direccion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                <input
                  type="date"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  value={selectedClient.fechaNacimiento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="genero">Género:</label>
                <select
                  id="genero"
                  name="genero"
                  value={selectedClient.genero}
                  onChange={handleChange}
                  required
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={selectedClient.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="idUsuario">ID de Usuario:</label>
                <input
                  disabled
                  type="text"
                  id="idUsuario"
                  name="idUsuario"
                  value={selectedClient.idUsuario}
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
  );
};

export default ClientProfile;



