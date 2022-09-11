import React from "react";
import { useState } from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";

export default function Home() {
  const [setUser] = useState({
    body: {},
  });
  return (
    <div className="container mx-auto">
      <Search />
      <Cards setUser={setUser} />
    </div>
  );
}
