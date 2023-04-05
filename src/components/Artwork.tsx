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
      className="w-full h-full flex items-center justify-center"
    >
      <div className="text-6xl font-bold">Artwork {id}</div>
    </motion.div>
  );
};

export default Artwork;
