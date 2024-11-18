import React from "react";
import { Route, Routes } from "react-router-dom";
import Motorcomponent from "./components/pages/motor/motor";
import Caravancomponent from "./components/pages/caravan/caravan";
import Tuningcomponent from "./components/pages/tuning/tuning";
import Usedcarcomponent from "./components/pages/usedcar/usedcar";
import Campingplacecomponent from "./components/pages/campingplace/campingplace";
import Mainpagecomponent from "./components/pages/mainpage/mainpage";
import Mui1component from "./components/pages/MUI/mui";
import Errorcomponent from "./components/error/error";
import NestedList from "./components/pages/MUI/NestedList";
import BasicModal from "./components/pages/MUI/modal";
import CaravanDetail from "./components/pages/caravanDetail/caravanDetail";
import MotorDetail from "./components/pages/motor/motordetail/motordetail";
import TuningDetail from "./components/pages/tuning/tuningdetail/tuningdetail";

const RouterComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/mainpage" element={<Mainpagecomponent/>}/>
        <Route path="/motor" element={<Motorcomponent />} />
        <Route path="/caravan" element={<Caravancomponent />} />
        <Route path="/tuning" element={<Tuningcomponent />} />
        <Route path="/usedcar" element={<Usedcarcomponent />} />
        <Route path="/campingplace" element={<Campingplacecomponent />} />
        <Route path="*" element={<Errorcomponent/>}/>
        <Route path="/admin" element={<Mui1component/>}/>
        <Route path="/list" element={<NestedList/>}/>
        <Route path="/modal" element={<BasicModal/>}/>
        <Route path="/caravandetails/:id" element={<CaravanDetail/>}/>
        <Route path="/motordetails/:id" element={<MotorDetail/>}/>
        <Route path="/tuningdetails/:id" element={<TuningDetail/>}/>
      </Routes>
    </>
  );
};

export default RouterComponent;