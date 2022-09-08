import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import Add from "./screen/Add";
import Header from "./components/Header";
import User from "./screen/User";
import FormTask from "./screen/FormTask";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Add />} />
        <Route path="/task/:id" element={<User />} />
        <Route path="/addtask/:id" element={<FormTask/>}/>
        <Route path="/edit/task/:id" element={<FormTask />} />
      </Routes>
      <Header></Header>
    </div>
  );
}

export default App;
