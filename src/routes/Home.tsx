import React from "react";
import Layout from "../shared/Layout";
import { Link } from "react-router-dom";
import noiseLogo from "/logo.png";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center justify-center pb-10">
        <div className="grow flex items-center justify-center">
          <img src={noiseLogo} alt="noise-logo" className="max-h-[596px]" />
        </div>
        <Link
          to={"interactive"}
          className="flex items-center justify-center gap-2 font-semibold uppercase mt-auto"
        >
          <span className="material-symbols-outlined">play_arrow</span>
          Enter Exhibition
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
