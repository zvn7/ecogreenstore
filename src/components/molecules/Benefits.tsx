import { FaLeaf, FaShippingFast, FaHandsHelping } from "react-icons/fa";

const BenefitsSection = () => {
	return (
		<section
			className="py-16 bg-gray-100 text-center"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<h2 className="text-3xl md:text-4xl font-bold text-green-600">
				Why Choose EcoGreen Store?
			</h2>
			<p className="mt-4 text-gray-700">
				We provide the best sustainable solutions for a greener lifestyle.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 md:px-64">
				<div className="flex flex-col items-center">
					<FaLeaf className="text-green-500 text-5xl mb-4 hover:scale-110 transition-transform" />
					<h3 className="text-xl font-bold text-green-600">
						Sustainable Products
					</h3>
					<p className="text-gray-600 mt-2">Made from recycled materials.</p>
				</div>
				<div className="flex flex-col items-center">
					<FaShippingFast className="text-green-500 text-5xl mb-4 hover:scale-110 transition-transform" />
					<h3 className="text-xl font-bold text-green-600">
						Carbon-Neutral Shipping
					</h3>
					<p className="text-gray-600 mt-2">Fast and eco-friendly delivery.</p>
				</div>
				<div className="flex flex-col items-center">
					<FaHandsHelping className="text-green-500 text-5xl mb-4 hover:scale-110 transition-transform" />
					<h3 className="text-xl font-bold text-green-600">
						Support Communities
					</h3>
					<p className="text-gray-600 mt-2">
						Part of our profits go to environmental conservation.
					</p>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
