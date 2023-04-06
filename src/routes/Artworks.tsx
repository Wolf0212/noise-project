import React, { useEffect } from "react";
import Layout from "../shared/Layout";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Artwork from "../components/Artwork";
import { AnimatePresence } from "framer-motion";

const Artworks: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/artworks")
      setTimeout(() => {
        navigate("song");
      }, 400);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex w-full h-full">
        <div className="side-bar flex flex-col p-6 bg-neutral-200">
          <Link to="song">Sõng</Link>
          <Link to="nghia">Nghĩa</Link>
          <Link to="viu">Víu</Link>
          <Link to="boi">Bội</Link>
          <Link to="vung">Vững</Link>
        </div>

        <div className="main-content grow overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path=":id" element={<Artwork />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Artworks;
