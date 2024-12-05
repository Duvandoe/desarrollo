import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/navbar';
import Home from './pages/home';
import Footer from './componentes/footer';
import Login from './pages/login';
import Registro from './pages/registro';
import Cliente from './pages/inicioclien';
import ClieNavbar from './componentes/navbarcli';
import Footercli from './componentes/footercli';
import Footeremp from './componentes/footeremp';
import Gestoradmin from './pages/gestoradmin';
import Gestordecliente from './pages/clientes';
import Gestordeempleado from './pages/empleados';
import Gestordetarea from './pages/tareassidebar';
import Reparaciones from './pages/reparaciones';
import Navbaremp from './componentes/navbaremp';
import Empleado from './pages/inicioemp';
import ReparacionesEmp from './pages/reparacionemp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </Router>
  );
}

function Main(){
  const location = useLocation();
  const inicionologin = ['/', '/login', '/registro'];
  const isInicioLogin = inicionologin.includes(location.pathname);
  const clientepage = ['/inicioclien', '/reparaciones'];
  const isClientePage = clientepage.includes(location.pathname);
  const gestoradmin = ['/gestoradmin', '/gestordecliente', '/gestordeempleado', '/gestordetarea'];
  const isGestorAdmin = gestoradmin.includes(location.pathname);
  const empleadopage = ['/inicioemp', '/reparacionemp'];
  const isEmpleadoPage = empleadopage.includes(location.pathname);
  return(
    <>
      {!isClientePage && !isGestorAdmin && !isEmpleadoPage && <Navbar />}
      {!isInicioLogin && !isGestorAdmin && !isEmpleadoPage && <ClieNavbar />}
      {!isInicioLogin && !isGestorAdmin && !isClientePage && <Navbaremp />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path='/inicioclien' element={<Cliente/>}/>
        <Route path='/inicioemp' element={<Empleado/>}/>
        <Route path='/reparaciones' element={<Reparaciones/>}/>
        <Route path='/reparacionemp' element={<ReparacionesEmp/>}/>
        <Route path='/gestoradmin' element={<Gestoradmin/>}/>
        <Route path='/gestordecliente' element={<Gestordecliente/>}/>
        <Route path='/gestordeempleado' element={<Gestordeempleado/>}/>
        <Route path='/gestordetarea' element={<Gestordetarea/>}/>

      </Routes>
      {!isClientePage && !isGestorAdmin && !isEmpleadoPage && <Footer />}
      {!isInicioLogin && !isGestorAdmin && !isEmpleadoPage && <Footercli />}
      {!isInicioLogin && !isGestorAdmin && !isClientePage && <Footeremp />}
    </>
  );
}

export default App;
