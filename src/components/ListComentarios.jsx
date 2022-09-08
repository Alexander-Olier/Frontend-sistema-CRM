import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function ListComentarios() {
  return (
    <div>
      <div className="flex">
        <div className="m-5">
          <CommentIcon></CommentIcon>
        </div>
        <div className="w-full">
          <div className="flex w-full">
            <h4>Comentario</h4>
            <p className="ml-auto">10/03/2022 4:30PM</p>
          </div>
          <div className="w-full h-content bg-[#fff]">
            <p className="p-5">Comentario 1</p>
            <div className="flex space-x-4 text-[#006191] justify-end mr-5">
              <Link to={"/edit"}>
                <EditIcon fontSize="small" />
              </Link>
              <button>
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </div>
          <p className="mt-5 text-center">No hay más comentarios</p>
        </div>
      </div>
    </div>
  );
}
