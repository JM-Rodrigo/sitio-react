import React from 'react'
import {Link} from 'react-router-dom';
const Venta = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="title">
          <h1>CRUD</h1>
        </div>
    
        <div className="row">
          <div className="col mt-2">
            
           
            <table className="table table-borderless mt-4">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Venta