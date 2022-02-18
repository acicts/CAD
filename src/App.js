import React from "react";
import { Routes, Route } from "react-router-dom";
import CodeFlow from "./pages/CodeFlow";
import DimX from "./pages/DimX";
import './App.css';
import AnalytIQ from "./pages/AnalytIQ";


const App = () => {
	return (
		<Routes>
			<Route path="/codeflow" element={<CodeFlow />} />
			<Route path="/dimensionx" element={<DimX />} />
			<Route path="/hello" element={<AnalytIQ />} />
		</Routes>
	);
};

export default App;
