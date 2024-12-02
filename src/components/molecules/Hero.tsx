import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import heroImg from "../../assets/img/sunrise-bali-jungle.jpg";

const HeroSection = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<section
			className="relative flex items-center justify-center h-screen bg-cover bg-center text-center"
			style={{
				backgroundImage: `url(${heroImg})`,
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
				<button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all">
					Explore Products
				</button>
			</div>
		</section>
	);
};

export default HeroSection;
