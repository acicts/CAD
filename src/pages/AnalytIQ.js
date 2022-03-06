import React from "react";
import Layout from "../components/AnalytIQ/Layout";
import About from "../components/AnalytIQ/Sections/About";
import Contact from "../components/AnalytIQ/Sections/Contact";
import Footer from "../components/AnalytIQ/Sections/Footer";
import Home from "../components/AnalytIQ/Sections/Home";
import Rules from "../components/AnalytIQ/Sections/Rules";
import Winners from "../components/AnalytIQ/Sections/Winners";
const AnalytIQ = () => {
  return (
    <div>
      <Layout>
        <Home />
        <About />
        <Rules />
        <Winners />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
};

export default AnalytIQ;
