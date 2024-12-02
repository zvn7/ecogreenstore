import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();

		// Dummy login check
		if (email === "admin@example.com" && password === "password123") {
			localStorage.setItem("authToken", "dummyToken"); // Simpan token login
			navigate("/admin/dashboard"); // Arahkan ke halaman dashboard admin
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
					Admin Login
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
			</form>
		</div>
	);
};

export default LoginPage;
