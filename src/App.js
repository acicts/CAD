import React from "react";
import { Routes, Route } from "react-router-dom";
import CodeFlow from "./pages/CodeFlow";
import DimX from "./pages/DimX";
import './App.css';


const App = () => {
	return (
		<Routes>
			<Route path="/codeflow" element={<CodeFlow />} />
			<Route path="/dimensionx" element={<DimX />} />
		</Routes>
	);
};

export default App;
