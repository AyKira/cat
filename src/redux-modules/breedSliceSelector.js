import { createSelector } from "@reduxjs/toolkit";

const getBreedSliceSelector = (state) => state.breeds;

export const getBreeds = createSelector(getBreedSliceSelector,(breed) => breed.data.breeds);
export const getSelectedBreed = createSelector(getBreedSliceSelector,(breed) => breed.data.selectedBreed);
export const getBreedName = createSelector(getBreedSliceSelector,(breed) => breed.data.breedName);
export const getBreedDescription = createSelector(getBreedSliceSelector,(breed) => breed.data.breedDescription);
export const getBreedImages = createSelector(getBreedSliceSelector,(breed) => breed.data.breedImages);