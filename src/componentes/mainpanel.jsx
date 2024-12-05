import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import '../assets/styles/MainPanel.css'; // Importamos el archivo CSS para los estilos

const MainPanel = () => {
  // Datos estáticos
  const repairData = [
    { month: 'Ene', reparaciones: 45, completadas: 40 },
    { month: 'Feb', reparaciones: 55, completadas: 48 },
    { month: 'Mar', reparaciones: 62, completadas: 55 },
    { month: 'Abr', reparaciones: 70, completadas: 65 }
  ];

  const categoryData = [
    { name: 'Computadoras', value: 45 },
    { name: 'Teléfonos', value: 30 },
    { name: 'Tabletas', value: 25 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="main-panel">
      <h1 className="title">Panel de Control ServiTIC</h1>

      <div className="charts-container">
        <div className="chart-box">
          <h2 className="chart-title">Reparaciones Mensuales</h2>
          <LineChart width={500} height={300} data={repairData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="reparaciones" stroke="#8884d8" />
            <Line type="monotone" dataKey="completadas" stroke="#82ca9d" />
          </LineChart>
        </div>

        <div className="chart-box">
          <h2 className="chart-title">Dispositivos Reparados</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={categoryData}
              cx={200}
              cy={150}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="chart-box full-width">
          <h2 className="chart-title">Rendimiento de Reparaciones</h2>
          <BarChart width={900} height={300} data={repairData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="reparaciones" fill="#8884d8" />
            <Bar dataKey="completadas" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <div className="summary-cards">
        <div className="card">
          <h3 className="card-title">Reparaciones Pendientes</h3>
          <p className="card-value">15</p>
        </div>
        <div className="card">
          <h3 className="card-title">Reparaciones Completadas</h3>
          <p className="card-value">208</p>
        </div>
        <div className="card">
          <h3 className="card-title">Ingresos Totales</h3>
          <p className="card-value">$45,600</p>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;



