import Search from '../Search/Search';
import React from 'react';
import AppWrapper from '../AppWrapper';

function MainPage() {
  return (
    <React.Fragment>
      <Search />
      <AppWrapper />
    </React.Fragment>
  );
}

export default MainPage;