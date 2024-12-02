import { useState } from "react";

const ProductManagementPage = () => {
	// Contoh data produk
	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Eco-Friendly Mug",
			category: "Accessories",
			price: "$15.00",
		},
		{ id: 2, name: "Recycled T-shirt", category: "Apparel", price: "$25.00" },
		{
			id: 3,
			name: "Biodegradable Phone Case",
			category: "Accessories",
			price: "$12.00",
		},
	]);

	const handleDelete = (id: number) => {
		setProducts(products.filter((product) => product.id !== id));
	};

	const handleAddProduct = () => {
		alert("Add Product functionality");
	};

	const handleEditProduct = (id: number) => {
		alert(`Edit product with ID: ${id}`);
	};

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-6">Product Management</h2>
			<p className="mb-6 text-gray-700">Manage all products here.</p>

			{/* Tombol Add Product */}
			<button
				className="bg-green-500 text-white py-2 px-4 rounded-lg mb-6 hover:bg-green-600 transition-all"
				onClick={handleAddProduct}
			>
				Add New Product
			</button>

			{/* Tabel Daftar Produk */}
			<div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
				<table className="min-w-full table-auto">
					<thead>
						<tr>
							<th className="py-2 px-4 text-left">Product Name</th>
							<th className="py-2 px-4 text-left">Category</th>
							<th className="py-2 px-4 text-left">Price</th>
							<th className="py-2 px-4 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product.id} className="border-b hover:bg-gray-100">
								<td className="py-2 px-4">{product.name}</td>
								<td className="py-2 px-4">{product.category}</td>
								<td className="py-2 px-4">{product.price}</td>
								<td className="py-2 px-4 space-x-4">
									<button
										className="text-blue-500 hover:text-blue-700"
										onClick={() => handleEditProduct(product.id)}
									>
										Edit
									</button>
									<button
										className="text-red-500 hover:text-red-700"
										onClick={() => handleDelete(product.id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductManagementPage;
