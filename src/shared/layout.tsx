import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <motion.main
      initial={{ opacity: 0, x: -20, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 20, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grow"
    >
      {children}
    </motion.main>
  );
};

export default Layout;
