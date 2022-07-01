import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png'


const URI = "http://localhost:8000/autos/";

const NuevoVehiculo = () => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [precio, setPrecio] = useState("");

  const navigate = useNavigate();

  //Procedimiento de guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      marca: marca,
      modelo: modelo,
      precio: precio,
    });
    navigate("/Venta");
  };

  return (
    <div className="container">
       <div className="title">
            <h3>AÑADE UN NUEVO VEHICULO</h3>
        </div>
      <img  src={logo} aria-hidden className='img-fluid' alt='Responsive image' />
      <div className="row">
        <div className="col">
          <form onSubmit={store}>
            <div className="mb-3 mt-5">
              <label className="form-label">Nombre : </label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingresa el nombre del vehiculo"
                required
              />{" "}
            </div>
            <div className="mb-3 mt-5">
              <label className="form-label">Marca : </label>
              <input
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingresa la marca del vehiculo"
                required
              />
            </div>
            <div className="mb-3 mt-5">
              <label className="form-label">Modelo : </label>
              <input
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingresa el modelo del vehiculo"
                required
              />
            </div>
            <div className="mb-3 mt-5">
              <label className="form-label">Precio : </label>
              <input
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Ingresa el Precio del vehiculo"
                required
              />
            </div>
            <div className="mb-3 mt-5">
              <button type="submit" className="btn btn-primary ">
                Guardar
              </button>
              <Link to="/Venta" className="btn btn-danger mx-2">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NuevoVehiculo;
