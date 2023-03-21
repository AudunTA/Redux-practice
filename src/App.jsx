import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

import "@fontsource/poppins";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import { lazy, Suspense } from "react";
const baseUrl = "https://nf-api.onrender.com/api/v1/social";

function App() {
  const [activeNav, setActiveNav] = useState("Explore");
  const handleNavChange = (newNav) => {
    setActiveNav(newNav);
  };
  return (
    <div className="App">
      <Header
        baseUrl={baseUrl}
        active={activeNav}
        changeNav={handleNavChange}
      />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
