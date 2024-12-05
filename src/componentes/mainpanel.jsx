import React from 'react';
import '../assets/styles/MainPanel.css';
import { Bar } from 'react-chartjs-2'; // Importar el gráfico de barras de react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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