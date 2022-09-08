import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";


export default function ListTask() {
  return (
    <div>
      <div className="flex">
        <div className="m-5">
          <CheckCircleOutlineIcon/>
        </div>
        <div className="w-full">
          <div className="flex w-full">
            <h4>Tarea</h4>
            <p className="ml-auto">10/03/2022 4:30PM</p>
          </div>
          <div className="w-full h-content bg-[#fff] p-5">
            <div className="flex">
              <span className="font-bold">CRM: </span>
              <p className="ml-2">Llamar al cliente</p>
            </div>
            <div className="flex">
              <span className="font-bold">Responsable: </span>
              <p className="ml-2">Marco Doubbled</p>
            </div>
            <div className="flex space-x-4 text-[#006191] justify-end mr-5">
              <Link to={"/edit/task/1"}>
                <EditIcon fontSize="small" />
              </Link>
              <button>
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </div>
          <div className="w-full text-right mt-5">
              <Link to="/addtask/1" className="bg-[#006191] p-2 text-white rounded-full">
                Agregar tarea
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
