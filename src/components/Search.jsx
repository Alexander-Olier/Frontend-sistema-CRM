import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function Search() {
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <form>
        <div className="bg-[#f6f6f6] p-2 pl-5 rounded-full">
          <InputBase placeholder="Buscar" />
          <IconButton>
            <SearchIcon style={{ color: "#006191" }} />
          </IconButton>
        </div>
      </form>
    </div>
  );
}
