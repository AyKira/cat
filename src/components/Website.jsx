import React, { useState } from 'react';
import AppBar from './AppBar';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vote from './Vote';
import Breeds from './Breeds';
import ImageSearch from './ImageSearch';
import Home from './Home';

function Site() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setIsOpen(isOpen);
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <AppBar toggleDrawer={toggleDrawer} />
        <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <Routes>
        <Route path="/home" element={<Home />} /> 
          <Route path="/vote" element={<Vote />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/image-search" element={<ImageSearch />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default Site;
