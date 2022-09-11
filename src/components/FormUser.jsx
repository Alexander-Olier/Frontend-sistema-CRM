import React from "react";
import { useDispatch } from "react-redux";
import { InputBase } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userAdd } from "../features/users/userSlice";

export default function FormUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //add form
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [mail, setMail] = React.useState("");

  const [cel, setCel] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [origen, setOrigen] = React.useState("");

  const onNombreChange = (e) => setNombre(e.target.value);
  const onApellidoChange = (e) => setApellido(e.target.value);
  const onMailChange = (e) => setMail(e.target.value);
  const onCelChange = (e) => setCel(e.target.value);
  const onFechaChange = (e) => setFecha(e.target.value);
  const onDireccionChange = (e) => setDireccion(e.target.value);





  const contacto = {
    nombre: nombre,
    apellido: apellido,
    mail: mail,
    cel:cel,
    fecha: fecha,
    direccion: direccion,
    contact: contact,
    origen: origen,
  };

  const location = useLocation();

  const pathName = location.pathname;

  const handleChange = (event) => {
    setContact(event.target.value);
  };
  const handleChange1 = (event) => {
    setOrigen(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAdd(contacto)) 
    navigate("/") 
  };
  
  return (
    <div className="lg:container mx-10 mt-2">
      <h1 className="text-xl text-[#006191] font-bold">
        {pathName === "/add" ? "Nuevo contacto" : "Editar contacto"}
      </h1>
      <div className="w-full h-96 p-5 bg-[#f6f6f6] rounded-lg overflow-y-auto divide-y-2 divide-white lg:h-3/5">
        <form onSubmit={handleSubmit}>
          <div className="grid space-y-2 ">
            <InputBase
              placeholder="Nombres"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
              value={nombre}
              onChange={onNombreChange}
            />
            <InputBase
              placeholder="Apellidos"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
              value={apellido}
              onChange={onApellidoChange}
            />
            <InputBase
              placeholder="E-mail"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
              value={mail}
              onChange={onMailChange}
            />
            <InputBase
              placeholder="Cel/Tel"
              type="tel"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
              value={cel}
              onChange={onCelChange}
            />
            <InputBase
              type="date"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
              value={fecha}
              onChange={onFechaChange}
            />
            <InputBase
              placeholder="Dirección"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
              value={direccion}
              onChange={onDireccionChange}
            />
            <select
              className="rounded-3xl text-[#a2a2a2] p-0 pl-2 lg:p-2"
              value={contact}
              onChange={handleChange}
            >
              <option hidden selected>
                Tipo de contacto
              </option>
              <option value={"Cliente"}>Cliente</option>
              <option value={"Empeado"}>Empleado</option>
            </select>
            <select
              className="rounded-3xl text-[#a2a2a2] p-0 pl-2 lg:p-2"
              value={contact}
              onChange={handleChange1}
            >
              <option hidden selected>
                Origen
              </option>
              <option value={"Origen1"}>Origen1</option>
              <option value={"Origen2"}>Origen2</option>
            </select>
          </div>
          <div className="w-full flex text-center mt-2 place-content-center	space-x-4">
            <Link
              to="/"
              className="bg-[#d1d1d1] p-2 px-5 text-white rounded-full"
            >
              Cancelar
            </Link>
            <button
              onSubmit={handleSubmit}
              className="bg-[#006191] p-2 px-5 text-white rounded-full"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
