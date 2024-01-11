import { createSelector } from "@reduxjs/toolkit";

const getRandomPictureSelector = (state) => state.randomPicture;

export const getRandomPictureData = createSelector(
    getRandomPictureSelector,
    (randomPicture) => randomPicture.data  //jak tohle muže volat když to není ani importovaný 
);

export const getRandomPictureIsInvalid = createSelector(
    getRandomPictureSelector,
    (randomPicture) => randomPicture.didInvalidate
);
