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
import Gestoradmin from './pages/gestoradmin';
import Gestordecliente from './pages/clientes';
import Gestordeempleado from './pages/empleados';

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
  const clientepage = ['/inicioclien'];
  const isClientePage = clientepage.includes(location.pathname);
  const gestoradmin = ['/gestoradmin', '/gestordecliente', '/gestordeempleado'];
  const isGestorAdmin = gestoradmin.includes(location.pathname);
  return(
    <>
      {!isClientePage && !isGestorAdmin && <Navbar />}
      {!isInicioLogin && !isGestorAdmin && <ClieNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path='/inicioclien' element={<Cliente/>}/>
        <Route path='/gestoradmin' element={<Gestoradmin/>}/>
        <Route path='/gestordecliente' element={<Gestordecliente/>}/>
        <Route path='/gestordeempleado' element={<Gestordeempleado/>}/>
      </Routes>
      {!isClientePage && !isGestorAdmin && <Footer />}
      {!isInicioLogin && !isGestorAdmin && <Footercli />}
    </>
  );
}

export default App;
