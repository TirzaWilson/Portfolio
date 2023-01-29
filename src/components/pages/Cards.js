import React, { useEffect } from 'react';
import CardItem from '../CardItem';
import '../../Styles/Cards.css';

function Cards() {
  return (
    <div id="cards">
      <div id='cards__link'></div>
      <h1 className="cards__header">Projects</h1>
      <div className="cards__container">
         <div className="cards__wrapper"></div>
         <ul className="cards__items">
            <CardItem 
            src="images/img-9.jpg"
            text="Designed and built a custom website from the ground up for a local real estate company."
            label="Real Estate Website"
            path="https://www.tpxrealty.com"
            github="https://github.com/TazMerch/TPX-Realty-Website"
            />
            <CardItem
            src="images/portfoliothumbnail.jpg"
            text="The website you're currently on was built by myself using Reactjs."
            label="Portfolio"
            path="/"
            github="https://github.com/TazMerch/portfolio"
            />
         </ul>
      </div>
    </div>
  );
}

export default Cards
