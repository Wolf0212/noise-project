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
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route element={<App />} path="/" key={location.pathname}>
          <Route index element={<Home />} key={location.pathname} />
          <Route element={<Artworks />} path="/artworks/*" key={"artworks"} />
          <Route element={<About />} path="/about" key={location.pathname} />
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
