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
  return(
    <>
      {!isClientePage && <Navbar />}
      {!isInicioLogin && <ClieNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path='/inicioclien' element={<Cliente/>}/>
      </Routes>
      {!isClientePage && <Footer />}
      {!isInicioLogin && <Footercli />}
    </>
  );
}

export default App;
