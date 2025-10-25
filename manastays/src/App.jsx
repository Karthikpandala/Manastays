// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import ListProperty from "./pages/ListProperty.jsx";
import Exclusive from "./pages/Exclusive.jsx";
import VillaDetail from "./pages/VillaDetail.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/exclusive" element={<Exclusive />} />
        <Route path="/list" element={<ListProperty />} />
        <Route path="/villas/:id" element={<VillaDetail />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
