import React from "react";
import "./Tutorials.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/1.png'
import image2 from './img/2.png'
import image3 from './img/3.png'
import image4 from './img/4.png'

const Tutorials = () => {
  return (
    <div className="App">
     <AliceCarousel autoPlay autoPlayInterval="5000">
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
};

export default Tutorials;
