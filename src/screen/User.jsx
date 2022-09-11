import React from "react";
import { Link, useParams } from "react-router-dom";
import UserOne from "../components/UserOne";
import Comentario from "../components/Comentario";
import Task from "../components/Task";

export default function User() {
  const { id } = useParams();
  return (
    <div className="container m-auto">
      <UserOne id={id}/>
      <Comentario id={id}/>
      <Task />
    </div>
  );
}
