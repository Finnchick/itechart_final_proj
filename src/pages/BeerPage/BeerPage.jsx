import React from 'react';
import BeerCardButton from '../MainPage/BeerCardButton/BeerCardButton';
import './style.sass';

function BeerPage({ beerName }) {
  return (
    <div className='beerPageWrapper'>
      <div className='beer-card'>
        <div className='beerMinimumInfo'>
          <h1>{beerName}</h1>
          <h4>Post Modern Classic. Spiky. Tropical. Hoppy.</h4>
          <BeerCardButton
            buttonText='Add to favorites'
            buttonClass={'beerCardButton'}
          />
          <p>
            Our flagship beer that kick started the craft beer revolution. This
            is James and Martins original take on an American IPA, subverted
            with punchy New Zealand hops. Layered with new world hops to create
            an all-out riot of grapefruit, pineapple and lychee before a spiky,
            mouth-puckering bitter finish.
          </p>
        </div>
        <div className='beer-avatar-box'>
          <img
            src='https://images.punkapi.com/v2/192.png'
            alt='Beer Image'
            className='beerAvatar'
          />
        </div>
      </div>
      <div className='beerDescription'>
        <div className='properties'>
          <h2>Properties</h2>
          <p>ABV</p>
          <p>IBU</p>
          <p>EBS</p>
        </div>
        <div className='foodPairing'>
          <h2>Food Pairing</h2>
          <p>Spicy carne asada with pico souce blalala</p>
          <p>Spicy carne asada with pico souce blalala</p>
          <p>Spicy carne asada with pico souce blalala</p>
        </div>
      </div>
      <div>
        <h2>Brewing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
          assumenda aut cum deleniti ea earum exercitationem facilis in incidunt
          libero necessitatibus optio provident quia saepe sint totam, vitae
          voluptates!
        </p>
      </div>
      <div className='preparing'>
        <div className='ingredients'>
          <h2>Ingredients</h2>
          <table>
            <tr>
              <h3>Water</h3>
              <p>25 litres</p>
            </tr>
            <tr>
              <h3>Malt</h3>
              <p>25 litres</p>
            </tr>
            <tr>
              <h3>Hops</h3>
              <p>25 litres</p>
            </tr>
            <tr>
              <h3>Yeast</h3>
              <p>25 litres</p>
            </tr>
          </table>
        </div>
        <div className='method'>
          <h2>Method</h2>
          <table>
            <tr>
              <h3>Water</h3>
              <p>25 litres</p>
            </tr>
            <tr>
              <h3>Malt</h3>
              <p>25 litres</p>
            </tr>
            <tr>
              <h3>Hops</h3>
              <p>25 litres</p>
            </tr>
            <tr>
              <h3>Yeast</h3>
              <p>25 litres</p>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BeerPage;