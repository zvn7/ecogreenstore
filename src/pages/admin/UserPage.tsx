import { useState } from "react";

const UserManagementPage = () => {
	// Contoh data pengguna
	const [users, setUsers] = useState([
		{ id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
		{ id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User" },
		{
			id: 3,
			name: "Mike Johnson",
			email: "mikejohnson@example.com",
			role: "User",
		},
	]);

	const handleDelete = (id: number) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold mb-6">User Management</h2>
			<p className="mb-6 text-gray-700">Manage all users here.</p>

			{/* Tombol Add User */}
			<button
				className="bg-green-500 text-white py-2 px-4 rounded-lg mb-6 hover:bg-green-600 transition-all"
				onClick={() => alert("Add User functionality")}
			>
				Add New User
			</button>

			{/* Tabel Daftar Pengguna */}
			<div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
				<table className="min-w-full table-auto">
					<thead>
						<tr>
							<th className="py-2 px-4 text-left">Name</th>
							<th className="py-2 px-4 text-left">Email</th>
							<th className="py-2 px-4 text-left">Role</th>
							<th className="py-2 px-4 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id} className="border-b hover:bg-gray-100">
								<td className="py-2 px-4">{user.name}</td>
								<td className="py-2 px-4">{user.email}</td>
								<td className="py-2 px-4">{user.role}</td>
								<td className="py-2 px-4 space-x-4">
									<button
										className="text-blue-500 hover:text-blue-700"
										onClick={() => alert(`Edit user ${user.id}`)}
									>
										Edit
									</button>
									<button
										className="text-red-500 hover:text-red-700"
										onClick={() => handleDelete(user.id)}
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

export default UserManagementPage;
