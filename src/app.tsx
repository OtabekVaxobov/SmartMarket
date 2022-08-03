import * as React from "react";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import About from "./pages/About.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
