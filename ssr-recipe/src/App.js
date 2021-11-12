import React from "react";
import { Route, Routes } from "react-router";
import Menu from "./components/Menu";
import RedPage from "./page/RedPage";
import BluePage from "./page/BluePage";
import Red from "./components/Red";
import Blue from "./components/Blue";

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
