import React from "react";
import { Navbarcon } from "./style";
import { Link } from "react-router-dom";


const Navbarcomponent = () => {
  return (
    <Navbarcon>
      <Link to={'/motor'}>
        <div>motor</div>
      </Link>
      <Link to={'/caravan'}>
        <div>caravan</div>
      </Link>
      <Link to={'/tuning'}>
        <div>tuning</div>
      </Link>
      <Link to={'/usedcar'}>
        <div>used car</div>
      </Link>
      <Link to={'/campingplace'}>
        <div>camping place</div>
      </Link>
    </Navbarcon>
  );
};

export default Navbarcomponent;
