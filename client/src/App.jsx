import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Turneringer from "./pages/Turneringer";
import Team from "./pages/Team";
import Layout from "./widgets/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Turneringer" element={<Turneringer />} />
        <Route path="/Team" element={<Team />} />

      </Route>
    </Routes>
  );
}

export default App;
