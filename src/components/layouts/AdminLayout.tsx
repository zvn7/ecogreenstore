import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		// Remove token and role from localStorage
		localStorage.removeItem("authToken");
		localStorage.removeItem("userRole");

		// Redirect to the login page
		navigate("/login");
	};

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<aside className="w-64 bg-gray-800 text-white flex flex-col">
				<div className="p-4 text-center text-2xl font-bold border-b border-gray-700">
					Admin Panel
				</div>
				<nav className="flex-1 p-4 space-y-4">
					<Link
						to="/admin/dashboard"
						className="block hover:bg-gray-700 p-2 rounded"
					>
						Dashboard
					</Link>
					<Link
						to="/admin/users"
						className="block hover:bg-gray-700 p-2 rounded"
					>
						User Management
					</Link>
					<Link
						to="/admin/products"
						className="block hover:bg-gray-700 p-2 rounded"
					>
						Product Management
					</Link>
				</nav>
				<div className="p-4 border-t border-gray-700">
					<button
						className="w-full bg-red-600 py-2 rounded hover:bg-red-700"
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			</aside>

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Header */}
				<header className="bg-gray-100 p-4 shadow">
					<h1 className="text-lg font-bold">Admin Dashboard</h1>
				</header>

				{/* Page Content */}
				<main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
					{children}
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
