import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Cuisine, Searched, Recipe, Home, Favorites } from "./index";
import { useState } from "react";

function Pages() {
  const [error, setError] = useState("");
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home error={error} setError={setError} />} />
        <Route
          path="/cuisine/:type"
          element={<Cuisine error={error} setError={setError} />}
        />
        <Route
          path="/searched/:search"
          element={<Searched error={error} setError={setError} />}
        />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
