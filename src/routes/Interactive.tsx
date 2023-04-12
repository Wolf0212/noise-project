import React, { useEffect, useState } from "react";
import Layout from "../shared/Layout";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Artwork from "../components/Artwork";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import ArtworkLink from "../components/ArtworkLink";

const Interactive: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selected, setSelected] = useState("song");

  const [open, setOpen] = useState(false);

  document.onmousemove = handleMouseMove;

  document.onmousedown = (event: any) => {
    if (event.clientX > 459 && open === true) setOpen(!open);
  };

  function handleMouseMove(event: any) {
    if (event.clientX <= 150 && open === false) {
      setOpen(!open);
    }
  }

  const linkArray = [
    { url: "song", name: "Song .9" },
    { url: "nghia", name: "Nghia .8" },
    { url: "viu", name: "Viu .8" },
    { url: "boi", name: "Boi .9" },
    { url: "vung", name: "Vung .7" },
  ];

  useEffect(() => {
    if (location.pathname === "/interactive")
      setTimeout(() => {
        navigate("song");
      }, 400);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex w-full h-full relative">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: -459, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -459, opacity: 0 }}
              transition={{ type: "tween" }}
              className="side-bar flex flex-col w-[459px] max-w-full absolute top-0 left-0 overflow-auto bg-[#080808] h-full z-10"
            >
              <div className="header p-8 border-b border-white flex justify-between gap-4 items-center relative">
                <Link
                  to="/"
                  className="p-2 border border-white flex items-center justify-center rounded-full hover:text-black hover:bg-white duration-300"
                >
                  <span className="material-symbols-outlined rotate-180">
                    play_arrow
                  </span>
                </Link>
                <button onClick={() => setOpen(false)}>
                  <span className="material-symbols-outlined text-[50px]">
                    menu
                  </span>
                </button>
              </div>
              <div className="link-container flex flex-col">
                <LayoutGroup>
                  {linkArray.map((link) => {
                    return (
                      <ArtworkLink
                        url={link.url}
                        name={link.name}
                        selected={selected === link.url}
                        onClick={() => setSelected(link.url)}
                      />
                    );
                  })}
                </LayoutGroup>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

export default Interactive;
