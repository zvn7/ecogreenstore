import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
	const testimonials = [
		{
			name: "John Doe",
			text: "EcoGreen Store has changed the way I shop. Their products are top-notch and sustainable!",
		},
		{
			name: "Jane Smith",
			text: "I love how EcoGreen Store contributes to the environment. Highly recommended!",
		},
		{
			name: "Michael Brown",
			text: "Fast shipping and excellent customer service. I’ll definitely come back!",
		},
		{
			name: "Emily White",
			text: "The products are not only eco-friendly but also stylish. Highly satisfied with my purchase!",
		},
		{
			name: "David Green",
			text: "A game changer for sustainable shopping. EcoGreen Store is my go-to now!",
		},
		{
			name: "Sophia Blue",
			text: "I love how they focus on quality and sustainability. It’s worth every penny!",
		},
	];

	// Pengaturan slider
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4, // Menampilkan 4 card
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: false, // Tidak memusatkan card
		responsive: [
			{
				breakpoint: 1024, // Tablet landscape
				settings: {
					slidesToShow: 3, // Tampilkan 3 card
				},
			},
			{
				breakpoint: 768, // Tablet portrait
				settings: {
					slidesToShow: 2, // Tampilkan 2 card
				},
			},
			{
				breakpoint: 480, // Mobile
				settings: {
					slidesToShow: 1, // Tampilkan 1 card
				},
			},
		],
	};

	return (
		<section className="py-16 bg-white" data-aos="fade-up">
			<h2 className="text-3xl md:text-4xl font-bold text-center text-green-600">
				What Our Customers Say
			</h2>
			<Slider {...settings} className="mt-12 mx-0">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="px-4 py-6 text-center border rounded-lg shadow-md bg-gray-50 mx-2"
					>
						<p className="text-gray-600 italic">"{testimonial.text}"</p>
						<h4 className="mt-4 font-bold text-green-600">
							{testimonial.name}
						</h4>
					</div>
				))}
			</Slider>
		</section>
	);
};

export default TestimonialsSection;
