import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import "./App.css";
import CAD from "./pages/CAD";

const CodeFlow = React.lazy(() => import("./pages/CodeFlow"));
const DimX = React.lazy(() => import("./pages/DimX"));
const AnalytIQ = React.lazy(() => import("./pages/AnalytIQ"));

const App = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" exact element={<CAD />} />
				<Route path="/codeflow" element={<CodeFlow />} />
				<Route path="/dimensionx" element={<DimX />} />
				<Route path="/analytiq" element={<AnalytIQ />} />
			</Routes>
		</Suspense>
	);
};

export default App;
