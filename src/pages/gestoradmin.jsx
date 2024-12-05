import React from 'react'
import Sidebar from '../componentes/sidebar';
import MainPanel from '../componentes/mainpanel';
import '../assets/styles/dashboard.css';

function gestoradmin() {
  return (
    <div className="dashboard">
      <Sidebar />
      <MainPanel />
    </div>
  )
}

export default gestoradmin