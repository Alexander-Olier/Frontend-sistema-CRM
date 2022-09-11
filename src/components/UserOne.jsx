import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../features/users/userSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export default function UserOne({ id }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.usersState);
  const { user } = userState;
  console.log(user);
  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);
  return (
    <div>
       <div className="flex">
        <Link to="/">
          <ArrowBackIcon style={{ color: "#1f749e" }} />
        </Link>
        <h1 className="text-xl text-[#006191] font-bold ml-5">
          Datos de contactos
        </h1>
      </div>
      <div className="w-full h-content mt-5 p-5 bg-[#f6f6f6] rounded-3xl space-y-2">
        <h1 className="text-xl text-[#006191] font-bold ">{user.nombre}</h1>
        <p>(+57) {user.cel}</p>
        <p>{user.mail}</p>
        <p>Mujer</p>
        <p>Barranquilla, Colombia</p>
      </div> 
    </div>
  );
}
