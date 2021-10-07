const selectBeerById = (id) => (state) => {
  return state.beerReducer.beerData.find((obj) => obj.id === +id);
};

const selectAllBeers = (state) => state.beerReducer.beerData;
const selectAllBeers1 = (state) => state.searchReducer.searchData;

export { selectAllBeers, selectBeerById, selectAllBeers1 };
