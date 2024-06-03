import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import "./styles/globals.scss";

const App: React.FC = () => {
	return (
		<>
			<Routes>
				{routes.map((route, index) => (
					<Route
						key={`route-${index}`}
						path={route.path}
						element={route.component}
					/>
				))}
			</Routes>
			<Toaster position="top-center" />
		</>
	);
};

export default App;
