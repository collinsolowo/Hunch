import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/appPages/LandingPage";
import './App.css'
import HunchOrderPage from "./pages/appPages/HunchOrderPage";
import TrackOrder from "./pages/appPages/TrackHunchOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/order" element={<HunchOrderPage />} />
          <Route path="/trackOrder" element={<TrackOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
