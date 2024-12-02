import AboutUs from "@/components/molecules/About";
import BenefitsSection from "@/components/molecules/Benefits";
import ContactUsSection from "@/components/molecules/ContactUs";
import { CTA } from "@/components/molecules/CTA";
import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";
import HeroSection from "@/components/molecules/Hero";
import ProductShowcase from "@/components/molecules/Products";
import TestimonialsSection from "@/components/molecules/Testimonials";

export const LandingPage = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<AboutUs />
			<ProductShowcase />
			<BenefitsSection />
			<CTA />
			{/* <Sustainability /> */}
			<TestimonialsSection />
			{/* <FAQ /> */}
			<ContactUsSection />
			<Footer />
		</div>
	);
};
