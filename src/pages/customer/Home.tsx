import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const CustomerHomePage = () => {
	// Daftar produk dummy
	const products = [
		{
			id: 1,
			name: "Eco-Friendly Water Bottle",
			price: 25000,
			oldPrice: 30000,
			image: "/img/water-bottle.jpg",
			rating: 4.5,
		},
		{
			id: 2,
			name: "Reusable Bamboo Utensils",
			price: 15000,
			oldPrice: 20000,
			image: "/img/bamboo-utensils.jpg",
			rating: 4.0,
		},
		{
			id: 3,
			name: "Organic Cotton Tote Bag",
			price: 20000,
			oldPrice: 25000,
			image: "/img/tote-bag.jpg",
			rating: 4.8,
		},
		{
			id: 4,
			name: "Biodegradable Plant Pots",
			price: 30000,
			oldPrice: null,
			image: "/img/plant-pots.jpg",
			rating: 4.2,
		},
		{
			id: 5,
			name: "Recycled Paper Notebooks",
			price: 18000,
			oldPrice: 25000,
			image: "/img/notebooks.jpg",
			rating: 4.6,
		},
		{
			id: 6,
			name: "Natural Loofah Sponge",
			price: 12000,
			oldPrice: 15000,
			image: "/img/loofah.jpg",
			rating: 4.3,
		},
		{
			id: 7,
			name: "Handmade Soap Bars",
			price: 50000,
			oldPrice: 60000,
			image: "/img/soap-bars.jpg",
			rating: 4.9,
		},
		{
			id: 8,
			name: "Reusable Grocery Bags",
			price: 25000,
			oldPrice: null,
			image: "/img/grocery-bags.jpg",
			rating: 4.4,
		},
	];

	const [favorites, setFavorites] = useState(products.map(() => false));

	const navigate = useNavigate();

	const handleLogout = () => {
		// Remove token and role from localStorage
		localStorage.removeItem("authToken");
		localStorage.removeItem("userRole");

		// Redirect to the login page
		navigate("/login");
	};

	// Fungsi toggle favorit
	const toggleFavorite = (index: number) => {
		const updatedFavorites = [...favorites];
		updatedFavorites[index] = !updatedFavorites[index];
		setFavorites(updatedFavorites);
	};

	const formatRupiah = (price: number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(price);
	};

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Navbar */}
			<nav className="bg-green-500 p-4">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<Link to="/customer/home" className="text-white text-xl font-bold">
						Customer Panel
					</Link>
					<div className="space-x-4">
						<Link
							to="/customer/home"
							className="text-white hover:text-gray-200"
						>
							Home
						</Link>
						<Link
							to="/customer/orders"
							className="text-white hover:text-gray-200"
						>
							Orders
						</Link>
						<Link
							to="/customer/profile"
							className="text-white hover:text-gray-200"
						>
							Profile
						</Link>

						<div className="p-4 border-t border-gray-700">
							<button
								className="w-full bg-red-600 py-2 rounded hover:bg-red-700"
								onClick={handleLogout}
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				className="relative h-80 bg-cover bg-center"
				style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 text-center text-white p-10">
					<h1 className="text-4xl font-bold">Welcome to Our Store</h1>
					<p className="mt-4 text-lg">Find the best products just for you.</p>
				</div>
			</section>

			{/* Product List */}
			<section className="bg-gray-50 py-8">
				<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{products.map((product, index) => (
						<div
							key={product.id}
							className="border p-4 rounded-lg bg-white shadow-lg hover:scale-105 transition-transform relative"
						>
							{/* Gambar Produk */}
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-64 object-cover rounded-md"
							/>

							{/* Diskon Harga */}
							{product.oldPrice && (
								<div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
									{Math.round(
										((product.oldPrice - product.price) / product.oldPrice) *
											100
									)}
									% OFF
								</div>
							)}

							<div className="flex justify-between items-center mt-4">
								{/* Nama Produk */}
								<h3 className="text-lg font-bold">{product.name}</h3>

								{/* Ikon Favorit */}
								<div
									className="cursor-pointer text-red-500"
									onClick={() => toggleFavorite(index)}
								>
									{favorites[index] ? (
										<FaHeart size={24} />
									) : (
										<FaRegHeart size={24} />
									)}
								</div>
							</div>

							{/* Rating Produk */}
							<div className="flex items-center text-yellow-400 mt-2">
								{[...Array(5)].map((_, i) => (
									<i key={i}>
										{i < Math.floor(product.rating) ? (
											<FaStar />
										) : product.rating - i > 0 ? (
											<FaStar style={{ clipPath: "inset(0 50% 0 0)" }} />
										) : (
											<FaRegStar />
										)}
									</i>
								))}
								<span className="text-gray-600 text-sm ml-2">
									{product.rating.toFixed(1)}
								</span>
							</div>

							{/* Harga Produk */}
							<div className="mt-3">
								{product.oldPrice && (
									<span className="text-gray-500 line-through text-sm mr-2">
										{formatRupiah(product.oldPrice)}
									</span>
								)}
								<span className="text-green-600 font-bold text-lg">
									{formatRupiah(product.price)}
								</span>
							</div>

							{/* Tombol */}
							<button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition-all">
								Add to Cart
							</button>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default CustomerHomePage;
