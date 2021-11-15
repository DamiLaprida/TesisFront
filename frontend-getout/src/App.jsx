import React from "react";

import Navigation from "./Components/Shared/Navigation";
import Login from "./Pages/Login";

//vendor
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/">Home</Route>
        <Route exact path="/salas">
          Salas
        </Route>
        <Route path="/reservas">Reservas</Route>
        <Route path="/contacto">Contacto</Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
