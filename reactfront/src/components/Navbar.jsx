import React from 'react'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav navbar-light-lg bg-light" id='barra'>
        <div className="container-fluid mt-2">
        <NavLink to='/' className ="link-dark" id="enlace">
            Inicio
        </NavLink>
        <NavLink to='Vehiculos'  className ="link-dark" id="enlace">
            Vehiculo
        </NavLink>
        <NavLink to='Venta'  className ="link-dark" id="enlace">
            Venta
        </NavLink>
        <NavLink to='Contacto'  className ="link-dark" id="enlace">
            Contactanos
        </NavLink>
        <NavLink to='NuevoVehiculo'  className ="link-dark" id="enlace">
        Nuevo Vehiculo
        </NavLink>
      </div>
  </nav>
    
  )
}

export default Navbar