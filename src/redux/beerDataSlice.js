import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
/* eslint-disable */
export const fetchAllData = createAsyncThunk(
  'beers/fetchAllData',
  async (url, thunkAPI) => {
    const response = await fetch(url);
    return response.json();
  }
);

const beerDataSlice = createSlice({
  name: 'slice',
  initialState: { beerData: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllData.fulfilled, (state, action) => {
      state.beerData = [...action.payload];
    });
  },
});

const { action, reducer } = beerDataSlice;

export default reducer;
