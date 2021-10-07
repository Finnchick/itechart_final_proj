const selectBeerById = (id) => (state) => {
  return state.beerReducer.beerData.find((obj) => obj.id === +id);
};

const selectAllBeers = (state) => state.beerReducer.beerData;

export { selectAllBeers, selectBeerById };
