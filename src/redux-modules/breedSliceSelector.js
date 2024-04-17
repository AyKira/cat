import { createSelector } from "@reduxjs/toolkit";

const getBreedSliceSelector = (state) => state.breeds;

export const getBreedData = createSelector(getBreedSliceSelector,(breed) => breed.data);

