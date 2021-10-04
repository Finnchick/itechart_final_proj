const selectBeerById = (id) => (state) => {
  return state.BeerReducer.beerData.find((obj) => obj.id === +id);
};

const selectAllBeers = (state) => state.BeerReducer.beerData;

export { selectAllBeers, selectBeerById };
