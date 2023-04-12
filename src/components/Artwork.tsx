import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Artwork: React.FC = () => {
  const { id } = useParams();
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex items-center justify-center overflow-hidden"
    >
      <img src={`/src/assets/artworks/${id}.png`} alt="artwork-placeholder" />
    </motion.div>
  );
};

export default Artwork;
