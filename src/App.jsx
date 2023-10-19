import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Website } from "./components";
import voteReducer from './voteSlice';

const store = configureStore({
  reducer: {
    vote: voteReducer,
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
