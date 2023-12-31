import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "../AppBar/AppBar";
import Sidebar from "../SideBar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vote from "../pages/Vote";
import Breeds from "../pages/Breeds";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

function Website() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar toggleDrawer={toggleDrawer} />
      <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Website;
