import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import TaskIcon from '@mui/icons-material/Task';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <ul className="flex justify-center space-x-10 fixed w-full bottom-0 bg-[#006191] text-white rounded-t-3xl">
        <li>
          <Link to="/" className="grid grid-cols-1 place-items-center">
            <PersonIcon />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="grid grid-cols-1 place-items-center">
            <TaskIcon />
            <span>Tareas</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="grid grid-cols-1 place-items-center">
            <CommentIcon />
            <span>Comentarios</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
