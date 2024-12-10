import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Email:", email, "Password:", password);

		// Dummy login check for admin and customer
		if (email === "admin@example.com" && password === "password123") {
			localStorage.setItem("authToken", "dummyToken");
			localStorage.setItem("userRole", "admin");
			console.log("Redirecting to Admin Dashboard");
			navigate("/admin/dashboard");
		} else if (email === "customer@example.com" && password === "password123") {
			localStorage.setItem("authToken", "dummyToken");
			localStorage.setItem("userRole", "customer");
			console.log("Redirecting to Customer Home");
			navigate("/customer/home");
		} else {
			setError("Invalid email or password");
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<form
				onSubmit={handleLogin}
				className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
			>
				<h2 className="text-2xl font-bold text-center text-green-600 mb-6">
					Login
				</h2>

				{error && <p className="text-red-500 text-center mb-4">{error}</p>}

				<div className="mb-4">
					<label className="block font-bold text-gray-700">Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
						placeholder="Enter your email"
						required
					/>
				</div>

				<div className="mb-6">
					<label className="block font-bold text-gray-700">Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
						placeholder="Enter your password"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
				>
					Login
				</button>

				{/* Tautan ke halaman Register */}
				<p className="text-center mt-4">
					Don't have an account?{" "}
					<Link to="/register" className="text-blue-500 hover:underline">
						Register here
					</Link>
				</p>
			</form>
		</div>
	);
};

export default LoginPage;
