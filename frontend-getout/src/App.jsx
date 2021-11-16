import React from "react";

import Navigation from "./Components/Shared/Navigation";
import Login from "./Pages/Login";
import Contact from "./Pages/Conctact";
import Backoffice from "./Pages/Backoffice";

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
        <Route exact path="/reservas">
          Reservas
        </Route>
        <Route exact path="/contacto" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/backoffice" element={<Backoffice />} />
      </Routes>
    </Router>
  );
}

export default App;
