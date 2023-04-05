import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../shared/layout";

const Artwork: React.FC = () => {
  const { id } = useParams();
  return (
    <Layout>
      <div className="text-6xl font-bold">Artwork {id}</div>
    </Layout>
  );
};

export default Artwork;
