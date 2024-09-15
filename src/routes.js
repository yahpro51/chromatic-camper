import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Motorcomponent from "./components/pages/motor/motor";
import Caravancomponent from "./components/pages/caravan/caravan";
import Tuningcomponent from "./components/pages/tuning/tuning";
import Usedcarcomponent from "./components/pages/usedcar/usedcar";
import Campingplacecomponent from "./components/pages/campingplace/campingplace";

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/motor" element={<Motorcomponent />} />
        <Route path="/caravan" element={<Caravancomponent />} />
        <Route path="/tuning" element={<Tuningcomponent />} />
        <Route path="/usedcar" element={<Usedcarcomponent />} />
        <Route path="/campingplace" element={<Campingplacecomponent />} />
      </Routes>
    </>
  );
};

export default RouterComponent;