import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8000/autos/";

const EditarVehiculo = () => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [precio, setPrecio] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  //Procedimiento para actualizar
  const updateAuto = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre: nombre,
      marca: marca,
      modelo: modelo,
      precio: precio,
    });
    Swal.fire({
      title: "¿Desea guardar los cambios?",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/Venta");
      } else if (result.isDenied) {
        Swal.fire("Cambios no guardados");
      }
    });
  };

  useEffect(() => {
    getAutoById();
  }, []);

  const getAutoById = async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.nombre);
    setMarca(res.data.marca);
    setModelo(res.data.modelo);
    setPrecio(res.data.precio);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="title">
            <h1>EDITA LA INFORMACIÓN DEL VEHICULO</h1>
          </div>

          <form onSubmit={updateAuto}>
            <div className="mb-3 mt-5">
              <label className="form-label">Nombre : </label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Ingresa el nombre del vehiculo"
                required
              />
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
                type="number"
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
              <button type="submit" className="btn btn-warning">
                Actualizar
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

export default EditarVehiculo;
