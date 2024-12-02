export const Sustainability = () => {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold text-green-600">
					Our Sustainability Commitment
				</h2>
				<p className="mt-4 text-lg text-gray-700">
					At EcoGreen Store, we believe in creating a positive impact on the
					planet. Our products are made from sustainable materials, and we
					strive to minimize our carbon footprint.
				</p>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h4 className="text-lg font-semibold">Eco-Friendly Materials</h4>
						<p className="mt-4">
							We only use materials that are sustainable, recyclable, and
							eco-friendly.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h4 className="text-lg font-semibold">Carbon Neutral Shipping</h4>
						<p className="mt-4">
							Our shipping process is carbon-neutral, reducing environmental
							impact.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h4 className="text-lg font-semibold">
							Supporting Green Initiatives
						</h4>
						<p className="mt-4">
							A portion of every sale goes toward supporting environmental
							causes and green projects.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
