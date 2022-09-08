import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className="lg:container mx-10 mt-10">
      <h1 className="text-xl text-[#006191] font-bold">Lista de contactos</h1>
      <div className="w-full max-h-96 p-5 bg-[#f6f6f6] rounded-lg	 overflow-y-auto divide-y-2 divide-white">
        <div className="flex">
          <div className="">
            <h1 className="font-bold">John Doe</h1>
            <span className="text-[#046392]">(+57) 3000000000</span>
          </div>
          <div className="flex ml-auto space-x-4 text-[#006191]">
            <Link to={"/edit"}>
              <EditIcon />
            </Link>
            <Link to={`/task/1`}>
              <AddTaskIcon />
            </Link>
            <button>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-10">
        <Link
          to="/add"
          className="bg-[#006191] p-2 px-5 text-white rounded-full"
        >
          Agregar
          <span className="ml-2">
            <PersonAddIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}
