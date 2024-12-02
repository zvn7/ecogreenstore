import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ikon dari react-icons

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="bg-green-500 p-4">
			{/* Container for centered content */}
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<div className="text-white font-bold text-xl">EcoGreen Store</div>

				{/* Desktop Menu - Centered */}
				<nav className="flex-grow">
					<ul className="flex justify-center space-x-6 text-white">
						<li>
							<a
								href="#home"
								className="hover:text-green-300 transition-colors"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#about-us"
								className="hover:text-green-300 transition-colors"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#contact-us"
								className="hover:text-green-300 transition-colors"
							>
								Contact Us
							</a>
						</li>
					</ul>
				</nav>

				{/* Login Button (Right side) */}
				<div>
					<a
						href="/login" // Ganti dengan link yang sesuai untuk halaman login
						className="bg-white text-green-500 py-2 px-6 rounded-lg hover:bg-green-100 transition-colors"
					>
						Login
					</a>
				</div>

				{/* Mobile Menu */}
				<div className="md:hidden text-white">
					{/* Hamburger Icon */}
					<button onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
					</button>
				</div>
			</div>

			{/* Dropdown Mobile Menu */}
			{menuOpen && (
				<div className="absolute top-16 left-0 w-full bg-green-500 text-white shadow-lg z-50">
					<ul className="flex flex-col space-y-4 p-4">
						<li>
							<a
								href="#home"
								className="hover:text-green-300 transition-colors"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#about-us"
								className="hover:text-green-300 transition-colors"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#contact-us"
								className="hover:text-green-300 transition-colors"
							>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href="/login"
								className="bg-white text-green-500 py-2 px-6 rounded-lg hover:bg-green-100 transition-colors"
							>
								Login
							</a>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
