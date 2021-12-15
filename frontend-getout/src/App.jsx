import React from "react";

import Navigation from "./components/Shared/Navigation";
import Login from "./Pages/Onboarding/Login";
import Booking from "./Pages/Onboarding/Booking";
import Backoffice from "./Pages/Backoffice";
import Reservas from "./Pages/Backoffice/Reservas";
import Salas from "./Pages/Backoffice/Salas";
import Stock from "./Pages/Backoffice/Stock";
import Usuarios from "./Pages/Backoffice/Usuarios";

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
        <Route exact path="/reservas" element={<Booking />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/backoffice" element={<Backoffice />} />
        <Route exact path="/backoffice/reservas" element={<Reservas />} />
        <Route exact path="/backoffice/salas" element={<Salas />} />
        <Route exact path="/backoffice/stock" element={<Stock />} />

        <Route exact path="/backoffice/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
