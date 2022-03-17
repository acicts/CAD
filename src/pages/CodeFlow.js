import React from 'react';
import Layout from '../components/CodeFLow/Layout';
import Home from '../components/CodeFLow/sections/Home';
import About from '../components/CodeFLow/sections/About';
import Themes from '../components/CodeFLow/sections/Themes';
import Rules from '../components/CodeFLow/sections/Rules';
import FAQ from '../components/CodeFLow/sections/FAQ';
import Contact from '../components/CodeFLow/sections/Contact';
import Prizes from '../components/CodeFLow/sections/Prizes';
import Submit from '../components/CodeFLow/sections/Submit';
import './CodeFlow.css';
import Sponsors from '../components/CodeFLow/sections/Sponsors';
import LeaderBoard from '../components/CodeFLow/sections/LeaderBoard';

const CodeFlow = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Themes />
      <Rules />
      <LeaderBoard />
      <Sponsors />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default CodeFlow;
