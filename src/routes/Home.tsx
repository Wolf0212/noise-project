import React from "react";
import Layout from "../shared/Layout";
import DetectorComponent from "../components/detector/DetectorComponent";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex w-full h-full items-center justify-center">
        <div className="text-6xl font-bold">Home</div>
        <DetectorComponent />
      </div>
    </Layout>
  );
};

export default Home;
