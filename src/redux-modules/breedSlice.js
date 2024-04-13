import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  breeds: [],
  selectedBreed: 'beng',
  breedName: '',
  breedImage: '',
  breedDescription: '',
  breedImages: [],  
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
      state.breedImages = action.payload || []; 
    },
  },
});

export const { setBreeds, setSelectedBreed, setBreedDetails } = breedSlice.actions;

export const fetchBreeds = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    dispatch(setBreeds(response.data));
    return Promise.resolve();
  } catch (error) {
    console.error('Error fetching breeds:', error);
    return Promise.reject();
  }
};

export const fetchBreedDetails = (breedId) => async (dispatch, getState) => {
  try {
    const state = getState();
    const selectedBreed = breedId || state.breeds.selectedBreed;
    
    if (selectedBreed) {
      const imageResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${selectedBreed}`);
      dispatch(setBreedDetails(imageResponse.data.map(img => img.url)));  
    }
  } catch (error) {
    console.error('Error fetching breed details:', error);
  }
};

export const selectBreeds = (state) => state.breeds;

export default breedSlice.reducer;
