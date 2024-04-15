    import { createSelector } from "@reduxjs/toolkit";

    const getRandomPictureSelector = (state) => state.randomPicture;

    export const getRandomPictureData = createSelector(getRandomPictureSelector,(randomPicture) => randomPicture.data);

