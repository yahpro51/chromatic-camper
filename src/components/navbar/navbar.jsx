import React from "react";
import { Navbarcon, Navend, Navlogo, Navmid } from "./style";
import { Link } from "react-router-dom";
import navcart from "../../assets/nav-cart.svg"
import navprofile from "../../assets/nav-profile.svg"
import navarrow from "../../assets/nav-arrow.svg"




const Navbarcomponent = () => {
  return (
    <Navbarcon>
      <Navlogo>
        Camper
      </Navlogo>
      <Navmid>
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
      </Navmid>
      <Navend>
        <img src={navcart} alt="" />
        <img src={navprofile} alt="" />
        <div>En
        <img src={navarrow} alt="" /></div>
      </Navend>
    </Navbarcon>
  );
};

export default Navbarcomponent;
