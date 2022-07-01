import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav  bg="light" expand="lg" >
        <div className="container-fluid mt-2" id='barra'>
        <NavLink to='/' className ="link-dark" id="enlace">
            Inicio
        </NavLink>
        <NavLink to='NuevoVehiculo'  className ="link-dark" id="enlace">
          Registro
        </NavLink>
        <NavLink to='Vehiculos'  className ="link-dark" id="enlace">
            Vehículo
        </NavLink>
        <NavLink to='Venta'  className ="link-dark" id="enlace">
            Venta
        </NavLink>
       
      </div>
  </nav>
    
  )
}

export default Navbar