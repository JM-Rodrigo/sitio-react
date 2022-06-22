import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './routers/Inicio'
import Vehiculos from './routers/Vehiculos'
import Venta from './routers/Venta'
import Contacto from './routers/Contacto'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Inicio/>}/>
        <Route path='Vehiculos' element={<Vehiculos />}/>
        <Route path='Venta' element={<Venta />}/>
        <Route path='Contacto' element={<Contacto />}/>
      </Route>
    </Routes> 
  </BrowserRouter>

);

