import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  breeds: [],
  selectedBreed: 'beng',  // Set the default selected breed if needed
  breedName: '',
  breedImage: '',
  breedDescription: '',
};

export const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setBreeds: (state, action) => {
      state.breeds = action.payload;
    },
    setSelectedBreed: (state, action) => {
      state.selectedBreed = action.payload;
    },
    setBreedDetails: (state, action) => {
      const breed = state.breeds.find(b => b.id === state.selectedBreed);
      state.breedName = breed?.name || '';
      state.breedDescription = breed?.description || '';
      state.breedImage = action.payload;
    },
  },
});

export const { setBreeds, setSelectedBreed, setBreedDetails } = breedSlice.actions;

export const fetchBreeds = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    dispatch(setBreeds(response.data));
  } catch (error) {
    // Handle error if needed
    console.error('Error fetching breeds:', error);
  }
};

export const fetchBreedDetails = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const selectedBreed = state.breeds.selectedBreed;

    if (selectedBreed) {
      const imageResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`);
      dispatch(setBreedDetails(imageResponse.data[0]?.url || ''));
    }
  } catch (error) {
    // Handle error if needed
    console.error('Error fetching breed details:', error);
  }
};

export const selectBreeds = (state) => state.breeds;

export default breedSlice.reducer;
