import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import TaskIcon from '@mui/icons-material/Task';
import CommentIcon from '@mui/icons-material/Comment';

export default function Header() {
  return (
    <header>
      <ul className="flex justify-center space-x-10 fixed w-full bottom-0 bg-[#006191] text-white rounded-t-3xl">
        <li>
          <a href="/" className="grid grid-cols-1 place-items-center">
            <PersonIcon />
            <span>Contact</span>
          </a>
        </li>
        <li>
          <a href="/" className="grid grid-cols-1 place-items-center">
            <TaskIcon />
            <span>Tareas</span>
          </a>
        </li>
        <li>
          <a href="/" className="grid grid-cols-1 place-items-center">
            <CommentIcon />
            <span>Comentarios</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
