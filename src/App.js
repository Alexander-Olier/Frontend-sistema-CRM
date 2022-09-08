import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import AddUser from "./screen/AddUser";
import Header from "./components/Header";
import User from "./screen/User";
import FormTask from "./components/FormTask";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit" element={<AddUser />} />
        <Route path="/task/:id" element={<User />} />
        <Route path="/addtask/:id" element={<FormTask/>}/>
        <Route path="/edit/task/:id" element={<FormTask />} />
      </Routes>
      <Header></Header>
    </div>
  );
}

export default App;
