import React, { useEffect, useState } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import './style.sass';
import Loading from '../Loading/Loading';

/* eslint-disable react/prop-types */
function AppWrapper() {
  // const fetchData = () => {
  //   return fetch('https://api.punkapi.com/v2/beers')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     }, []);
  // };
  const [dataT, setData] = useState(null);
  //const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();
    setData(data);
   // setLoading(false);
  }, []);

  return (
    <div className="appWrapper">

      {dataT ? (
          <React.Fragment>
            {dataT.map((item) => {
              return (
                  <BeerCard
                      key={item.id}
                      id={item.id}
                      cardHeader={item.name}
                      information={item.tagline}
                      imageUrl={item.image_url}
                  />
              );
            })}
          </React.Fragment>
      ) : (
          <Loading />

      )}

    </div>
  );
}

export default AppWrapper;