import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Email:", email, "Password:", password);

		// Simulate saving user data (you can later change this to an API call)
		if (localStorage.getItem(email)) {
			setError("Email already registered");
		} else {
			// Save the new user data
			localStorage.setItem(email, JSON.stringify({ password }));
			console.log("User registered successfully!");
			navigate("/login"); // After successful registration, navigate to login
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<form
				onSubmit={handleRegister}
				className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
			>
				<h2 className="text-2xl font-bold text-center text-green-600 mb-6">
					Register
				</h2>

				{error && <p className="text-red-500 text-center mb-4">{error}</p>}

				<div className="mb-4">
					<label className="block font-bold text-gray-700">Name</label>
					<input
						type="text"
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
						placeholder="Enter your name"
						required
					/>
				</div>

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

				<div className="mb-6">
					<label className="block font-bold text-gray-700">
						Confirm Password
					</label>
					<input
						type="password"
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
						placeholder="Confirm your password"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
				>
					Register
				</button>

				<p className="text-center mt-4">
					Have an account?{" "}
					<Link to="/login" className="text-blue-500 hover:underline">
						Login here
					</Link>
				</p>
			</form>
		</div>
	);
};

export default RegisterPage;
