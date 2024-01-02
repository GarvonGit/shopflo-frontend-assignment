import React, { useState, useEffect } from "react";
import { Router, Route, Routes } from "react-router-dom";
import DetailedView from "./components/detailedComponent";

import HomePage from "./components/HomePage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listing/:id" element={<DetailedView />} />
    </Routes>
  );
};

export default App;
