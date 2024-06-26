import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import "./index.css";
import Listproduct from "./Pages/ListProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Listproduct />} />
      </Routes>
    </div>
  );
}

export default App;
