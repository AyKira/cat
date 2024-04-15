import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import randomPictureSlice from './redux-modules/randomPictureSlice';
import breedSlice from "./redux-modules/breedSlice";


const store = configureStore({
    reducer: {
      randomPicture: randomPictureSlice,
      breeds: breedSlice,
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<App />
</Provider>
);



