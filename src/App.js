import React from "react";
import { Routes, Route } from "react-router-dom";
import CodeFlow from "./pages/CodeFlow";

const App = () => {
	return (
		<Routes>
			<Route path="/codeflow" element={<CodeFlow />} />
		</Routes>
	);
};

export default App;
