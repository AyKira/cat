import { createSelector } from "@reduxjs/toolkit";

const getBreedSliceSelector = (state) => state.breeds;

export const getBreeds = createSelector(getBreedSliceSelector,(breed) => breed.breeds);
export const getSelectedBreed = createSelector(getBreedSliceSelector,(breed) => breed.selectedBreed);
export const getBreedName = createSelector(getBreedSliceSelector,(breed) => breed.breedName);
export const getBreedImage = createSelector(getBreedSliceSelector,(breed) => breed.breedImage);
export const getBreedDescription = createSelector(getBreedSliceSelector,(breed) => breed.breedDescription);
export const getBreedImages = createSelector(getBreedSliceSelector,(breed) => breed.breedImages);