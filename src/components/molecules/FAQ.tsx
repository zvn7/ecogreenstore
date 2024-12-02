export const FAQ = () => {
	const faqs = [
		{
			question: "What is EcoGreen Store?",
			answer:
				"EcoGreen Store is a platform for eco-friendly, sustainable, and environmentally responsible products.",
		},
		{
			question: "How do I place an order?",
			answer:
				"Simply browse our product catalog, add items to your cart, and check out using our secure payment methods.",
		},
		{
			question: "Do you offer free shipping?",
			answer: "Yes! We offer free shipping on orders over a certain amount.",
		},
		{
			question: "How do I return an item?",
			answer:
				"We offer a 30-day return policy for most products. Please check our return policy page for more details.",
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold text-green-600">
					Frequently Asked Questions
				</h2>
				<div className="mt-8">
					{faqs.map((faq, index) => (
						<div key={index} className="border-t pt-6">
							<h4 className="text-lg font-semibold">{faq.question}</h4>
							<p className="mt-2 text-gray-600">{faq.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
