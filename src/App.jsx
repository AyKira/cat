// Website.jsx
import React, { useState } from "react";
import AppBar from "./components/AppBar/AppBar";
import Sidebar from "./components/SideBar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vote from "./components/pages/Vote";
import Breeds from "./components/pages/Breeds";
import Favorites from "./components/pages/Favorites";
import Home from "./components/pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <BrowserRouter>
        <AppBar toggleDrawer={toggleDrawer} />
        <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
