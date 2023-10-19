import { createSlice } from '@reduxjs/toolkit';
import { pictures } from './components/pages/Vote';
const initialState = {
  currentPictureIndex: 0,
};

const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    incrementPictureIndex: (state) => {
      state.currentPictureIndex = (state.currentPictureIndex + 1) % pictures.length;
    },
    
  },
});

export const { incrementPictureIndex } = voteSlice.actions;
export default voteSlice.reducer;
