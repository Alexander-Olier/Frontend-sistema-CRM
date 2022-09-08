import React from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="container">
      <Search />
      <Cards />
    </div>
  );
}
