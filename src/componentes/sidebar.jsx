import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaTasks, FaHome, FaUsers } from 'react-icons/fa';
import '../assets/styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>ServTIC Dashboard</h2>
      </div>
      <ul>
      <li>
          <Link to="/gestoradmin" className="sidebar-item">
            <FaHome className="sidebar-icon" /> Inicio del Dashboard
          </Link>
        </li>
        <li>
          <Link to="/gestordecliente" className="sidebar-item">
            <FaUser className="sidebar-icon" /> Gestión de Clientes
          </Link>
        </li>
        <li>
          <Link to="/gestordeempleado" className="sidebar-item">
            <FaUsers className="sidebar-icon" /> Gestión de Empleados
          </Link>
        </li>
        <li>
          <Link to="/gestordetarea" className="sidebar-item">
            <FaTasks className="sidebar-icon" /> Tareas
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
