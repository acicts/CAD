import React from "react";
import Layout from "../components/DimensionX/Layout";
import About from "../components/DimensionX/Sections/About";
import Contact from "../components/DimensionX/Sections/Contact";
import Home from "../components/DimensionX/Sections/Home";
import Prizes from "../components/DimensionX/Sections/Prizes";
import Submit from "../components/DimensionX/Sections/Submit";
import Rules from "../components/DimensionX/Sections/Rules";
import Themes from "../components/DimensionX/Sections/Themes";

const DimX = () => {
  return (
    <div>
      <Layout>
        <Home />
        <About />
        <Rules />
        <Themes />
        <Submit/>
        <Prizes/>
        <Contact />
      </Layout>
    </div>
  );
};

export default DimX;
