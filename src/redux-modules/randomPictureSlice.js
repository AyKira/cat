import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const API_KEY = 'live_FA7y0B4u6c3oj56PDR8IQw29gZhL6lcHEgqmez4Z4Pcyhj2u6iHoQc7T9F18J21X';

export const fetchRandomPicture = createAsyncThunk(
  'randomPicture/fetchRandomPicture',
  async () => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search?limit=1',
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );

      if (response.data.length > 0) {
        const imageUrl = response.data[0].url; // // tady dostanu url z getu
        const imageId = response.data[0].id; // tady dostanu id z getu
        return { imageUrl, imageId };
      }
    } catch (error) {
      console.error('Fetch Random Picture Error:', error);
      throw error;
    }
  }
);

export const invalidateRandomPicture = createAsyncThunk(
  'randomPicture/invalidate',
  async () => Promise.resolve()
);

export const votePicture = createAsyncThunk(
  'randomPicture/votePicture',
  async ({ imageId, value }) => {
    try {
      await axios.post('https://api.thecatapi.com/v1/votes',
        {
          image_id: imageId,
          value: value,
        },
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  }
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
    data: {
      imageUrl: "",
      imageId: "",
    },
    isFetching: false,
    didInvalidate: false,
    error: null,
    savedUrls: [],
  },
 
  extraReducers: {
    [fetchRandomPicture.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchRandomPicture.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.data = {
        imageUrl: action.payload.imageUrl,
        imageId: action.payload.imageId,
      };
      state.didInvalidate = false;
    },
    [fetchRandomPicture.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = action.error.message;
    },
    [savePicture.fulfilled]: (state, action) => {
      state.savedUrls.push(action.payload);
    },
    [invalidateRandomPicture.fulfilled]: (state) => {
      state.didInvalidate = true;
    },
    [votePicture.pending]: (state) => {
      state.isFetching = true;
    },
    [votePicture.fulfilled]: (state) => {
      state.isFetching = false;
    },
    [votePicture.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
  
});


export default randomPictureSlice.reducer;
