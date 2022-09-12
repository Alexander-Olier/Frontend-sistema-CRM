import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { deleteUser, getUsers } from "../features/users/userSlice";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Cards() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.usersState);
  const [ search, setSearch ] =React.useState("")

  const { users } = userState;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteUser(id));
  };
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  };

  const results = !search ? users : users.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))


  return (
    <div className="lg:container mx-10 ">
      <div className="flex justify-center items-center w-full mt-5 mb-10">
        <div className="bg-[#f6f6f6] p-2 pl-5 rounded-full">
          <InputBase
            placeholder="Buscar"
            value={search}
            onChange={handleSearch}
          />
          <IconButton>
            <SearchIcon style={{ color: "#006191" }} />
          </IconButton>
        </div>
      </div>
      <h1 className="text-xl text-[#006191] font-bold">Lista de contactos</h1>
      <div className="w-full max-h-96 p-5 bg-[#f6f6f6] rounded-lg	 overflow-y-auto divide-y-2 divide-white">
        {results &&
          results.map((user, index) => (
            <div className="flex" key={index}>
              <Link to={`/user/${index}`}>
                <div className="">
                  <h1 className="font-bold">{user.nombre}</h1>
                  <span className="text-[#046392]">(+57) {user.cel}</span>
                </div>
              </Link>
              <div className="flex ml-auto space-x-4 text-[#006191]">
                <Link to={`/edit/${index}`}>
                  <EditIcon />
                </Link>
                <Link to={`/task/1`}>
                  <AddTaskIcon />
                </Link>
                <button onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
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
