import React from "react";
import Layout from "../shared/Layout";
import Team from "/about.png";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center justify-center px-4">
        <div className="text-5xl font-semibold uppercase leading-snug mb-5">
          About Us
        </div>
        <img src={Team} alt="about-us image" className="max-h-[500px]" />
        <div className="max-w-[700px] mt-7 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a sodales est, eget dignissim tellus. Praesent sed luctus urna. Fusce
          sit amet est non nisl vestibulum pharetra vel sollicitudin enim.
          Aliquam vitae volutpat arcu. In fringilla euismod arcu varius blandit.
          In dapibus ligula ipsum, vitae lacinia nibh sodales ultricie.
        </div>
      </div>
    </Layout>
  );
};

export default About;
