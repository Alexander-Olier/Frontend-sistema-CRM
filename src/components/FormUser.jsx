import React from "react";
import { InputBase } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function FormUser() {
  const [contact, setContact] = React.useState("");
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);

  const handleChange = (event) => {
    setContact(event.target.value);
  };
  return (
    <div className="lg:container mx-10 mt-2">
      <h1 className="text-xl text-[#006191] font-bold">
        {pathName === "/add" ? "Nuevo contacto" : "Editar contacto"}
      </h1>
      <div className="w-full h-96 p-5 bg-[#f6f6f6] rounded-lg overflow-y-auto divide-y-2 divide-white lg:h-3/5">
        <form className="">
          <div className="grid space-y-2 ">
            <InputBase
              placeholder="Nombres"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
            />
            <InputBase
              placeholder="Apellidos"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
            />
            <InputBase
              placeholder="E-mail"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
            />
            <InputBase
              placeholder="Cel/Tel"
              type="tel"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
            />
            <InputBase
              type="date"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
            />
            <InputBase
              placeholder="Dirección"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
            />
            <InputBase
              placeholder="E-mail"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
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
              onChange={handleChange}
            >
              <option hidden selected>
                Origen
              </option>
              <option value={"Origen1"}>Origen1</option>
              <option value={"Origen2"}>Origen2</option>
            </select>
          </div>
        </form>
      </div>
      <div className="w-full flex text-center mt-2 place-content-center	space-x-4">
        <Link to="/" className="bg-[#d1d1d1] p-2 px-5 text-white rounded-full">
          Cancelar
        </Link>
        <button className="bg-[#006191] p-2 px-5 text-white rounded-full">
          Agregar
        </button>
      </div>
    </div>
  );
}
