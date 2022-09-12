import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { InputBase, Radio } from "@mui/material";

export default function FormTask() {
  const [contact, setContact] = React.useState("");

  const location = useLocation();
  const pathName = location.pathname;

  const handleChange = (event) => {
    setContact(event.target.value);
  };

  return (
    <div className="container  mx-auto">
      <div className="flex">
        <Link to="/">
          <ArrowBackIcon style={{ color: "#1f749e" }} />
        </Link>
        <h1 className="text-xl text-[#006191] font-bold ml-5"> user </h1>
      </div>
      <h1 className="text-xl text-[#006191] font-bold ml-5 mb-5">
        {pathName === "/edit/task" ? "Nueva tarea" : "Editar tarea"}
      </h1>

      <div className="w-full bg-[#f6f6f6] rounded-lg p-5 mx-5">
        <form className="">
          <div className="grid space-y-2 ">
            <label className="text-[#006191] font-bold">
              Titulo de la tarea
            </label>
            <InputBase
              placeholder="Agregar titulo"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
            />
            <label className="text-[#006191] font-bold">
              Persona responsable
            </label>
            <select
              className="rounded-3xl text-[#a2a2a2] p-0 pl-2 lg:p-2"
              value={contact}
              onChange={handleChange}
            >
              <option hidden selected>
                Seleccionar
              </option>
              <option value={"Cliente"}>Cliente</option>
              <option value={"Empeado"}>Empleado</option>
            </select>
            <label className="text-[#006191] font-bold">Fecha límite</label>
            <InputBase
              type="date"
              placeholder="Seleccionar"
              className="rounded-3xl p-0 pl-2 lg:p-2"
              style={{ background: "#fff" }}
            />
            <h1 className="text-xl text-[#006191] font-bold">
              Resume del estado de la tarea
            </h1>
            <div className="flex">
              <Radio style={{ color: "#78d2a5" }} />
              <p className="self-center">
                Solicitar un resumen del estado de la tarea
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
