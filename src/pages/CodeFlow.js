import React from "react";
import Layout from "../components/CodeFLow/Layout";
import Home from "../components/CodeFLow/sections/Home";
import About from "../components/CodeFLow/sections/About";
import Themes from "../components/CodeFLow/sections/Themes";
import Rules from "../components/CodeFLow/sections/Rules";
import FAQ from "../components/CodeFLow/sections/FAQ";
import "./codeflow.css";

const CodeFlow = () => {
	return (
		<Layout>
			<Home />
			<About />
			<Themes />
			<Rules />
			<FAQ />
		</Layout>
	);
};

export default CodeFlow;
