import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  breeds: [],
  selectedBreed: 'beng',
  breedName: '',
  breedImage: '',
  breedDescription: '',
  breedImages: [],
};

// list of breeds
export const fetchBreeds = createAsyncThunk(
  'breeds/fetchBreeds',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// pictures and details of a cat
export const fetchBreedDetails = createAsyncThunk(
  'breeds/fetchBreedDetails',
  async (breedId, { getState, rejectWithValue }) => {
    try {
      const selectedBreed = breedId || getState().breeds.selectedBreed;
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${selectedBreed}`);
      return response.data.map(img => img.url);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setSelectedBreed: (state, action) => {
      state.selectedBreed = action.payload;
    },
  },
  extraReducers: {
    [fetchBreeds.pending]: (state) => {
      state.loading = true;
    },
    [fetchBreeds.fulfilled]: (state, action) => {
      state.breeds = action.payload;
      state.loading = false;
    },
    [fetchBreeds.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchBreedDetails.pending]: (state) => {
      state.loading = true;
    },
    [fetchBreedDetails.fulfilled]: (state, action) => {
      const breed = state.breeds.find(b => b.id === state.selectedBreed);
      state.breedName = breed?.name || '';
      state.breedDescription = breed?.description || '';
      state.breedImages = action.payload;
      state.loading = false;
    },
    [fetchBreedDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const { setSelectedBreed } = breedSlice.actions;

export const selectBreeds = (state) => state.breeds;

export default breedSlice.reducer;
