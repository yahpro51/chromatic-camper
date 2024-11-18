import React from "react";
import { Carousel } from "react-responsive-carousel";
import photo1 from "../caravan/assets/c5.jpg"
import photo2 from "./assets/carouselimg2.jpg"
import photo3 from "./assets/carouselimg3.jpg"


function Carouselcomponent() {
  return (
    <Carousel>
                <div style={{height:"800px"}}>
                    <img src={photo1} alt="" />
                    <h1 className="legend">Royal Flair Caravans</h1>
                </div>
                <div style={{height:"800px"}}>
                <img src={photo2} alt="" />
                    <h1 className="legend">Sterling Eccles SE range</h1>
                </div>
                <div style={{height:"900px"}}>
                <img src={photo3} alt="" />
                    <h1 className="legend">New Hobby Caravan</h1>
                </div>
            </Carousel>
  )
}

export default Carouselcomponent;