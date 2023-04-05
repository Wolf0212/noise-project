import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import Artworks from "./routes/Artworks";
import About from "./routes/About";

const AnimatedRoute = () => {
  const location = useLocation();

  const getPathKey = (path: string, level = 1) => {
    return path.split("/").splice(1, level).join("/");
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={getPathKey(location.pathname)}>
        <Route element={<App />} path="/">
          <Route index element={<Home />} />
          <Route element={<Artworks />} path="artworks/*" />
          <Route element={<About />} path="about" />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoute />
    </BrowserRouter>
  </React.StrictMode>
);
