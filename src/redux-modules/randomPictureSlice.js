// randomPictureSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Thunk to fetch a random picture
export const fetchRandomPicture = createAsyncThunk(
  'randomPicture/fetchRandomPicture',
  async () => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search?limit=1'
      );
      if (response.data.length > 0) {
        const imageUrl = response.data[0].url;
        return imageUrl;
      }
    } catch (error) {
      throw error;
    }
  }
);

// Thunk to save a picture URL
export const savePicture = createAsyncThunk(
  'randomPicture/savePicture',
  async (imageUrl) => {
    // You might want to save the imageUrl to a backend or local storage here
    return imageUrl;
  }
);

const randomPictureSlice = createSlice({
  name: "randomPicture",
  initialState: {
    data: [], // Initialize as an empty array
    isFetching: false,
    didInvalidate: false,
    error: null,
    savedUrls: [], // Add a new field to store saved picture URLs
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomPicture.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchRandomPicture.fulfilled, (state, action) => {
        state.isFetching = false;
        state.data = action.payload;
      })
      .addCase(fetchRandomPicture.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      })
      .addCase(savePicture.fulfilled, (state, action) => {
        state.savedUrls.push(action.payload);
      });
  },
});

// Export randomPictureSlice actions
export const { pictureRequest, pictureSuccess, pictureError } = randomPictureSlice.actions;

export default randomPictureSlice.reducer;
