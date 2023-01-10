import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1> Check Out These Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/image-1.jpeg"
              text="Deep in the forests of the great Amazon Jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="/images/image-2.jpeg"
              text="Waterfalls of the great Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="/images/image-3.jpeg"
              text="Explore the Islands of Bali"
              label="Romantic/Luxury"
              path="/services"
            />

            <CardItem
              src="/images/image-4.jpeg"
              text="Explore the Islands of Phuket"
              label="Romantic/Luxury"
              path="/services"
            />
            <CardItem
              src="/images/image-5.jpeg"
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
