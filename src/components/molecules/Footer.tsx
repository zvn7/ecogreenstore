import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-green-500 py-6 text-white">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="flex flex-col">
					<p>© 2024 EcoGreen Store. All rights reserved.</p>
					<p>
						Created with ❤️ by{" "}
						<a
							href="https://ilhammaul.vercel.app/"
							className="hover:text-gray-300 transition-colors underline"
							target="_blank"
						>
							Ilham M
						</a>
					</p>
				</div>

				<div className="flex space-x-4 mt-4 md:mt-0 justify-center">
					<a
						href="#"
						className="hover:text-gray-300 transition-colors"
						aria-label="Facebook"
					>
						<FaFacebook className="text-2xl" />
					</a>
					<a
						href="#"
						className="hover:text-gray-300 transition-colors"
						aria-label="Twitter"
					>
						<FaTwitter className="text-2xl" />
					</a>
					<a
						href="#"
						className="hover:text-gray-300 transition-colors"
						aria-label="Instagram"
					>
						<FaInstagram className="text-2xl" />
					</a>
					<a
						href="#"
						className="hover:text-gray-300 transition-colors"
						aria-label="LinkedIn"
					>
						<FaLinkedin className="text-2xl" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
