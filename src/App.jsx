import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Website } from "./components";
import randomPictureSlice from './randomPictureSlice';

const store = configureStore({
  reducer: {
    randomPicture: randomPictureSlice,
  },
});

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Website />
      </React.Fragment>
    </Provider>
  );
}

export default App;
