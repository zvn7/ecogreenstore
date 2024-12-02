const AboutUs = () => {
	return (
		<section
			className="py-16 bg-gray-100 text-center"
			data-aos="fade-up"
			id="about-us"
		>
			{/* Judul */}
			<h2 className="text-2xl md:text-4xl font-bold text-green-600">
				About Us
			</h2>

			{/* Visi dan Misi */}
			<div className="mt-6 px-4 md:px-96 text-gray-700">
				<p>
					At <span className="font-semibold">EcoGreen Store</span>, our vision
					is to create a sustainable world where everyone contributes to the
					preservation of our planet. We strive to inspire and empower people to
					adopt eco-friendly practices in their daily lives through
					high-quality, environmentally conscious products.
				</p>
			</div>

			<div className="flex flex-col md:flex-row justify-center mt-12 space-y-8 md:space-y-0 md:space-x-6 px-4 md:px-72">
				{/* Poin 1 */}
				<div className="bg-white shadow-md p-6 rounded-lg flex-1 flex flex-col items-center">
					<h3 className="text-xl font-bold text-green-500">
						Sustainable Products
					</h3>
					<p className="text-gray-600 mt-4 text-center min-h-[60px]">
						We offer eco-friendly products made from recycled and renewable
						materials.
					</p>
				</div>

				{/* Poin 2 */}
				<div className="bg-white shadow-md p-6 rounded-lg flex-1 flex flex-col items-center">
					<h3 className="text-xl font-bold text-green-500">
						Eco-Friendly Packaging
					</h3>
					<p className="text-gray-600 mt-4 text-center min-h-[60px]">
						Our packaging is designed to minimize waste and reduce environmental
						harm.
					</p>
				</div>

				{/* Poin 3 */}
				<div className="bg-white shadow-md p-6 rounded-lg flex-1 flex flex-col items-center">
					<h3 className="text-xl font-bold text-green-500">
						Supporting Communities
					</h3>
					<p className="text-gray-600 mt-4 text-center min-h-[60px]">
						A portion of our profits is dedicated to environmental conservation
						projects and local community support.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
