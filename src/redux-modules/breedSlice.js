import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// list of all breeds
export const fetchListOfBreeds = createAsyncThunk(
  'breeds/fetchListOfBreeds',
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
export const fetchSelectedBreed = createAsyncThunk(
  'breeds/fetchSelectedBreed',
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

const initialState = {
  breeds: [],
  selectedBreed: 'beng',
  breedName: '',
  breedImage: '',
  breedDescription: '',
  breedImages: [],
  isFetching: false,
  error: null,
};

export const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setSelectedBreed: (state, action) => {
      state.selectedBreed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListOfBreeds.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchListOfBreeds.fulfilled, (state, action) => {
        state.breeds = action.payload;
        state.isFetching = false;
      })
      .addCase(fetchListOfBreeds.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      })
      .addCase(fetchSelectedBreed.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchSelectedBreed.fulfilled, (state, action) => {
        const breed = state.breeds.find(b => b.id === state.selectedBreed);
        state.breedName = breed?.name || '';
        state.breedDescription = breed?.description || '';
        state.breedImages = action.payload;
        state.isFetching = false;
      })
      .addCase(fetchSelectedBreed.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      });
  }
});

export const { setSelectedBreed } = breedSlice.actions;


export default breedSlice.reducer;
