import React from "react";
import { Navbarcon, Navend, Navlogo, Navmid } from "./style";
import { Link } from "react-router-dom";
import navcart from "../../assets/nav-cart.svg"
import navprofile from "../../assets/nav-profile.svg"
import navarrow from "../../assets/nav-arrow.svg"




const Navbarcomponent = () => {
  return (
    <Navbarcon>
     <Link to={"/mainpage"} style={{textDecoration: `none`}}><Navlogo>
        Camper
      </Navlogo></Link> 
      <Navmid>
      <Link to={'/motor'} style={{textDecoration: `none`}}>
        <div>motor</div>
      </Link>
      <Link to={'/caravan'} style={{textDecoration: `none`}}>
        <div>caravan</div>
      </Link>
      <Link to={'/tuning'} style={{textDecoration: `none`}}>
        <div>tuning</div>
      </Link>
      <Link to={'/usedcar'} style={{textDecoration: `none`}}>
        <div>used car</div>
      </Link>
      <Link to={'/campingplace'} style={{textDecoration: `none`}}>
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
