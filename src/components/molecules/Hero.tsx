import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<section
			className="relative flex items-center justify-center h-screen bg-cover bg-center text-center"
			style={{
				backgroundImage: `url('/img/sunrise-bali-jungle.jpg')`,
			}}
			data-aos="fade-in"
		>
			{/* Overlay untuk efek gelap pada gambar */}
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>

			{/* Konten Teks */}
			<div className="relative z-10 text-white px-6">
				<h1 className="text-4xl md:text-6xl font-bold">
					Make Your Life Greener with EcoGreen Store
				</h1>
				<p className="text-lg md:text-xl mt-4">
					Discover sustainable products for a better future.
				</p>
				<Link
					to="/customer/home" // Menggunakan Link untuk navigasi
					className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all"
				>
					Explore Products
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
