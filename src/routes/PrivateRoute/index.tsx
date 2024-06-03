import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
	children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	const isAuthenticated = false;
	if (isAuthenticated) return children;
	else return <Navigate to="/login" />;
};

export default PrivateRoute;
