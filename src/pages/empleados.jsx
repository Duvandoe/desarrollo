import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/EmpleadoProfile.css'; // Para los estilos del cliente
import Sidebar from '../componentes/sidebar';

const EmpleadoProfile = () => {
  // Lista de clientes
  const empleado = [
    {
      idEmpleado: '12345',
      nombre: 'Feliciano',
      cargo: 'Reparaciones de Computadoras',
      salario: '50000',
      idUsuario: '1'
    },
    {
        idEmpleado: '12345',
        nombre: 'Maximiliano',
        cargo: 'Reparaciones de Celulares',
        salario: '30000',
        idUsuario: '2'
    }
  ];

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
              {empleado.map((empleado) => (
                <tr key={empleado.idEmpleado}>
                  <td>{empleado.idEmpleado}</td>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.cargo}</td>
                  <td>{empleado.salario}</td>
                  <td>{empleado.idUsuario}</td>
                  <td>
                    <Link to={`/edit-client/${empleado.idEmpleado}`} className="btn">Editar Empleado</Link>
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

export default EmpleadoProfile;