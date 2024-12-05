import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ClientProfile.css'; // Para los estilos del cliente
import Sidebar from '../componentes/sidebar';

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
                    <Link to={`/edit-client/${client.codigo}`} className="btn">Editar Cliente</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;


