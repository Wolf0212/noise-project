import React from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import About from "./routes/About";
import Gallery from "./routes/Gallery";
import Interactive from "./routes/Interactive";
import ReactDOM from "react-dom";

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
          <Route element={<Interactive />} path="interactive/*" />
          <Route element={<Gallery />} path="gallery" />
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
