// Website.jsx
import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import Sidebar from "../SideBar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vote from "../pages/Vote";
import Breeds from "../pages/Breeds";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

function Website({ useInternalRouter = true }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  const content = (
    <>
      <AppBar toggleDrawer={toggleDrawer} />
      <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );

  return useInternalRouter ? (<BrowserRouter>{content}</BrowserRouter>) : (content);
}

export default Website;
