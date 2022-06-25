import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Swal from 'sweetalert2';

const URI = 'http://localhost:8000/autos/'
const Venta = () => {
  const [autos, setAutos] = useState([])
  useEffect(() =>{
    getAutos()
  }, [])

  //Procedimiento para mostrar todos los autos
  const getAutos = async () =>{
    const res = await axios.get(URI)
    setAutos(res.data)
  }
  
  //Procedimiento para eliminar todos los autos
  const deleteAuto = async (id) => {
    await axios.delete(URI+id)
    getAutos()
  }

  //Confirmación de eliminación
  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Deseas eliminar?",
      text: "Se eliminará el registro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, deseo eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAuto(id);
        Swal.fire("Eliminado!", "Has eliminado el registro", "Exitosamente");
      }
    });
  };

  return (
    <>
      <div className="container mt-2">
        <div className="title">
          <h1>VEHICULOS TESJI</h1>
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
                {autos.map((auto) => (
                  <tr key={auto.id}>
                    <td>{auto.nombre}</td>
                    <td>{auto.marca}</td>
                    <td>{auto.modelo}</td>
                    <td>{auto.precio}</td>
                    <td>
                      <Link 
                      to={`/EditarVehiculo/${auto.id}`} className="btn btn-info"  >
                        <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <button onClick={()=>confirmDelete(auto.id)} className='btn btn-danger'>
                        <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Venta