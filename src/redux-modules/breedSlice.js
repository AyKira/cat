import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetails = createAsyncThunk(
  'breeds/fetchBreedsAndDetails',
  async (prop, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      const breeds = response.data;
      const selectedBreed = getState().breeds.data.selectedBreed;
      const breedDetails = breeds.find(b => b.id === selectedBreed);
      const breedDescription = breedDetails.description;
      const breedName = breedDetails.name;
      const imagesResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${selectedBreed}`);
      const images = imagesResponse.data.map(e => e.url);
      
      return {breeds, breedName, breedDescription, images};
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : 'An error occurred');
    }
  }
);

const initialState = {
  isFetching: false,
  error: null,
  data: {
    breeds: [],
    selectedBreed: 'beng',
    breedName: '',
    breedDescription: '',
    breedImages: [],
  },
};

export const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    inputBreed: (state, action) => {
      state.data.selectedBreed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.isFetching = false;
        state.data.breeds = action.payload.breeds;
        state.data.breedName = action.payload.breedName;
        state.data.breedDescription = action.payload.breedDescription;
        state.data.breedImages = action.payload.images;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      });
  }
});

export const { inputBreed } = breedSlice.actions;

export default breedSlice.reducer;
