import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'; 

export const fetchRandomPicture = createAsyncThunk(
  'randomPicture/fetchRandomPicture',
  async () => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search?limit=1&size=full&sub_id=demo-93913c'
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

const randomPictureSlice = createSlice({
  name: "randomPicture",
  initialState: {
    data: null,
    isFetching: false,
    didInvalidate: false,
    error: null,
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
      });
  },
});

export const { pictureRequest, pictureSuccess, pictureError } = randomPictureSlice.actions;

export default randomPictureSlice.reducer;
