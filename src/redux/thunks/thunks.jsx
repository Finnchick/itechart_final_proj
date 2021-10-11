import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchWithoutParams, fetchByName } from '../../constants';

export const fetchAllData = createAsyncThunk('beers/fetchAllData', async () => {
  const response = await fetch(fetchWithoutParams);
  return response.json();
});

export const fetchByNamez = createAsyncThunk(
  'beers/fetchAllData',
  async (name) => {
    console.log(`${fetchByName}=${name}`);
    const response = await fetch(`${fetchByName}=${name}`);
    return response.json();
  }
);
