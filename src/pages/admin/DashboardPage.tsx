const DashboardPage = () => {
	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
			<p className="text-gray-700 mb-6">Welcome to the admin dashboard!</p>

			{/* Statistik Section */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				{/* Card 1: Total Products */}
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-bold text-gray-800">Total Products</h3>
					<p className="text-3xl font-bold text-green-500">250</p>
				</div>

				{/* Card 2: Total Users */}
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-bold text-gray-800">Total Users</h3>
					<p className="text-3xl font-bold text-green-500">1200</p>
				</div>

				{/* Card 3: Total Orders */}
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-bold text-gray-800">Total Orders</h3>
					<p className="text-3xl font-bold text-green-500">350</p>
				</div>
			</div>

			{/* Recent Activities */}
			<div className="bg-white p-6 rounded-lg shadow-lg mb-8">
				<h3 className="text-xl font-bold text-gray-800 mb-4">
					Recent Activities
				</h3>
				<ul>
					<li className="mb-2">
						<span className="font-bold">John Doe</span> added a new product to
						the store.
					</li>
					<li className="mb-2">
						<span className="font-bold">Jane Smith</span> placed an order for 3
						items.
					</li>
					<li className="mb-2">
						<span className="font-bold">Mike Johnson</span> updated product
						details.
					</li>
				</ul>
			</div>

			{/* Quick Actions */}
			<div className="bg-white p-6 rounded-lg shadow-lg">
				<h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
				<div className="flex space-x-4">
					<button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
						Add Product
					</button>
					<button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors">
						Manage Users
					</button>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
