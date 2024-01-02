import React, { useState, useEffect } from "react";
import { Router, Route, Routes } from "react-router-dom";
import DetailedView from "./components/detailedComponent";
import ReservationSuccessPage from "./components/bookedPage";
import HomePage from "./components/HomePage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listing/:id" element={<DetailedView />} />
      <Route path="/reserve" element={<ReservationSuccessPage />} />
    </Routes>
  );
};

export default App;
