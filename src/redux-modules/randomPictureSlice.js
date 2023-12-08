import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


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

export const invalidateRandomPicture = createAsyncThunk(
  'randomPicture/invalidate',
  async () => Promise.resolve()
);


export const savePicture = createAsyncThunk(
  'randomPicture/savePicture',
  async (imageUrl) => {
   
    return imageUrl;
  }
);

const randomPictureSlice = createSlice({
  name: "randomPicture",
  initialState: {
    data: [], 
    isFetching: false,
    didInvalidate: false,
    error: null,
    savedUrls: [], 
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomPicture.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchRandomPicture.fulfilled, (state, action) => {
        state.isFetching = false;
        state.data = action.payload;
        state.didInvalidate = false;
      })
      .addCase(fetchRandomPicture.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      })
      .addCase(savePicture.fulfilled, (state, action) => {
        state.savedUrls.push(action.payload);
      })
      .addCase(invalidateRandomPicture.fulfilled, (state) => {
        state.didInvalidate = true;
      });
  },
});


export const { pictureRequest, pictureSuccess, pictureError } = randomPictureSlice.actions;

export default randomPictureSlice.reducer;
