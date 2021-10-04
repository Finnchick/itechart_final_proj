import { fetchWithoutParams } from "../../constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllData = createAsyncThunk("beers/fetchAllData", async () => {
  const response = await fetch(fetchWithoutParams);
  return response.json();
});
