import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;

	return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default RequireAuth;
