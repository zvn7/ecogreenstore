const ContactUsSection = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Message sent!");
	};

	return (
		<section className="py-16 bg-gray-100" id="contact-us" data-aos="fade-up">
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-green-600">
					Get in Touch
				</h2>
				<p className="mt-4 text-gray-600">
					We’d love to hear from you! Whether you have a question or need help,
					feel free to reach out to us.
				</p>
			</div>

			<div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto gap-12">
				{/* Form Section */}
				<form
					onSubmit={handleSubmit}
					className="flex-1 bg-white p-8 rounded-lg shadow-md"
				>
					<h3 className="text-xl font-bold text-green-600 mb-6">
						Send Us a Message
					</h3>
					<div className="mb-4">
						<label className="block text-gray-700 font-bold mb-2">Name</label>
						<input
							type="text"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							placeholder="Your Name"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 font-bold mb-2">Email</label>
						<input
							type="email"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							placeholder="Your Email"
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 font-bold mb-2">
							Message
						</label>
						<textarea
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
							rows={4}
							placeholder="Your Message"
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition-all font-bold"
					>
						Send Message
					</button>
				</form>

				{/* Map Section */}
				<div className="flex-1">
					<h3 className="text-xl font-bold text-green-600 mb-6">
						Our Location
					</h3>
					<iframe
						className="w-full h-[460px] rounded-lg shadow-md"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345089373!2d144.95373531531697!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2z5Y6f5ZC05pel5biC5b-D5Lit5bu_!5e0!3m2!1sja!2sjp!4v1630832148396!5m2!1sja!2sjp"
						allowFullScreen={true}
						loading="lazy"
						title="Google Maps Location"
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default ContactUsSection;
