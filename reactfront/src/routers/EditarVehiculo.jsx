import React from 'react'
import {Link} from 'react-router-dom';
const EditarVehiculo = () => {
  return (
<div className="container">
      <div className="row">
        <div className="col">
          <div className="title">
            <h1>EDITA LA INFORMACIÓN DEL VEHICULO</h1>
          </div>
          
          <form 
          //onSubmit={update}
          >
            <div className="mb-3 mt-4">
              <label className="form-label">Nombre : </label>
              <input
                //value={Nombre}
                //onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingresa el nombre del vehiculo"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Marca : </label>
              <input
                //value={Marca}
                //onChange={(e) => setMarca(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingresa la marca del vehiculo"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Modelo : </label>
              <input
                //value={Modelo}
                //onChange={(e) => setModelo(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingresa el modelo del vehiculo"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Precio : </label>
              <input
                //value={Modelo}
                //onChange={(e) => setModelo(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingresa el Precio del vehiculo"
                required
              />
            </div>
            <button type="submit" className="btn btn-warning">
              Actualizar
            </button>

            <Link to="/" className="btn btn-danger mx-2">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>  )
}

export default EditarVehiculo