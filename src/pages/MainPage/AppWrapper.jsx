import React, { useEffect, useState } from 'react';
import BeerCard from './BeerCard/BeerCard';
import './style.sass';
import Loading from '../../commonComponents/Loading/Loading';

function AppWrapper() {
  const [dataT, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();
    setData(data);
  }, []);

  let beerCardsCollection = null;
  if (dataT) {
    beerCardsCollection = dataT.map((item) => {
      let {
        id,
        name: cardHeader,
        tagline: information,
        image_url: imageUrl,
      } = item;
      return (
        <BeerCard
          key={id}
          id={id}
          cardHeader={cardHeader}
          information={information}
          imageUrl={imageUrl}
        />
      );
    });
  }

  return (
    <div className='appWrapper'>
      {dataT ? (
        <React.Fragment>{beerCardsCollection}</React.Fragment>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default AppWrapper;