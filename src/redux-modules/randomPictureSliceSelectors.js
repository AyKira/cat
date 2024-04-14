import { createSelector } from "@reduxjs/toolkit";

const getRandomPictureSelector = (state) => state.randomPicture;

export const getRandomPictureData = createSelector(
    getRandomPictureSelector,
    (randomPicture) => randomPicture.data  
);

export const getRandomPictureIsInvalid = createSelector(
    getRandomPictureSelector,
    (randomPicture) => randomPicture.didInvalidate
);
