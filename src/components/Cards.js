import React, { useEffect } from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Cards() {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: 'ease',});
  }, []);
  return (
    <div id="cards">
      <div id='cards__link'></div>
      <h1 className="cards__header" data-aos="fade-down">PROJECTS</h1>
      <div className="cards__container">
         <div className="cards__wrapper"></div>
         <ul className="cards__items" data-aos="fade-up">
            <CardItem 
            src="images/img-9.jpg"
            text="Designed and built a custom website from the ground up for a local real estate company."
            label="Real Estate Website"
            path="https://www.tpxrealty.com"
            />
            <CardItem
            src="images/portfoliothumbnail.jpg"
            text="The website you're currently on was built by myself using Reactjs."
            label="Portfolio"
            path="/"
            />
         </ul>
      </div>
    </div>
  );
}

export default Cards
