import * as React from "react";
import { Routes, Route } from "react-router-dom";
import StarterPage from "./pages/StarterPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
