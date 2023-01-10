import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../images/image-1.jpeg'
import img2 from '../images/image-2.jpeg'
import img3 from '../images/image-3.jpeg'
import img4 from '../images/image-4.jpeg'
import img5 from '../images/image-5.jpeg'

function Cards() {
  return (
    <div className='cards'>
      <h1> Check Out These Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Deep in the forests of the great Amazon Jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src={img2}
              text="Waterfalls of the great Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Explore the Islands of Bali"
              label="Romantic/Luxury"
              path="/services"
            />

            <CardItem
              src={img4}
              text="Explore the Islands of Phuket"
              label="Romantic/Luxury"
              path="/services"
            />
            <CardItem
              src={img5}
              text="Stay in Luxurious Resorts in the Maldives "
              label="Romantic/Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Cards;
