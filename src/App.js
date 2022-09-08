import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import Add from "./screen/Add";
import Header from "./components/Header";
import User from "./screen/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Add />} />
        <Route path="/task/:id" element={<User />} />
      </Routes>
      <Header></Header>
    </div>
  );
}

export default App;
