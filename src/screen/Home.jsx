import React from "react";
import { useState } from "react";
import Cards from "../components/Cards";

export default function Home() {
  const [setUser] = useState({
    body: {},
  });
  return (
    <div className="container mx-auto">
      <Cards setUser={setUser} />
    </div>
  );
}
