import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;
	const userRole = localStorage.getItem("userRole"); // Ambil role dari localStorage

	// Jika user belum login, arahkan ke halaman login
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	// Cek role user, pastikan role adalah 'admin' atau 'customer'
	if (userRole !== "admin" && userRole !== "customer") {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
};

export default RequireAuth;
