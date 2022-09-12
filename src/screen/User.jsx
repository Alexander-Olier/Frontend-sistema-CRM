import React from "react";
import { useParams } from "react-router-dom";
import UserOne from "../components/UserOne";
import Comentario from "../components/Comentario";
import Task from "../components/Task";

export default function User() {
  const { id } = useParams();
  return (
    <div className="container mx-auto">
      <UserOne id={id}/>
      <Comentario/>
      <Task />
    </div>
  );
}
