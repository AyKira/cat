import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isFetching: false,
  didInvalidate: false,
  error: null,
};

const randomPictureSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    picturesRequest(state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    pictureSuccess(state, action) {
      const { payload } = action;

      return {
        ...state,
        isFetching: false,
        error: null,
        didInvalidate: false,
        data: payload?.[0],
      };
    },
    pictureError(state, action) {
      return {
        ...state,
        error: "něco se nepovedlo",
      };
    },
  },
});

const { actions, reducer } = randomPictureSlice;

export const { pictureRequest, pictureSuccess, pictureError } = actions;

export default reducer;
