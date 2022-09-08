import React from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UserOne from "../components/UserOne";
import Comentario from "../components/Comentario";
import Task from "../components/Task";

export default function User() {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="container m-auto">
      <div className="flex">
        <Link to="/">
          <ArrowBackIcon style={{ color: "#1f749e" }} />
        </Link>
        <h1 className="text-xl text-[#006191] font-bold ml-5">
          Datos de contactos
        </h1>
      </div>
      <UserOne />
      <Comentario />
      <Task />
    </div>
  );
}
