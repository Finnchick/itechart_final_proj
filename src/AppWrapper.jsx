import React, { useEffect, useState } from 'react';
import BeerCard from './commonComponents/BeerCard';
import './sass/AppWrapper.sass';
import Loading from './Loading';
/* eslint-disable react/prop-types */
function AppWrapper() {
  // const fetchData = () => {
  //   return fetch('https://api.punkapi.com/v2/beers')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     }, []);
  // };
  const [dataT, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();
    setData(data);
    setLoading(false);
  }, []);

  return (
    <div className="AppWrapper">
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          {dataT.map((item) => {
            return (
              <BeerCard
                key={item.id}
                cardHeader={item.name}
                information={item.tagline}
                imageUrl={item.image_url}
              />
            );
          })}
        </React.Fragment>
      )}
    </div>
  );
}

export default AppWrapper;
