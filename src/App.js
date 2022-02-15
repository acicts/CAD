import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Themes from "./sections/Themes";
import Rules from "./sections/Rules";
import FAQ from "./sections/FAQ";

const App = () => {
	return (
		<div>
			<Home />
			<About />
			<Themes />
			<Rules />
			<FAQ />
		</div>
	);
};

export default App;
