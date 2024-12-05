import React from 'react';
import '../assets/styles/MainPanel.css';

function MainPanel() {
  return (
    <div className="main-panel">
      <h1>Bienvenido, Administrador</h1>
      <div className="dashboard-stats">
        <div className="card">Empleados Activos: 25</div>
        <div className="card">Tareas Pendientes: 10</div>
        <div className="card">Nómina Actualizada</div>
      </div>
    </div>
  );
}

export default MainPanel;