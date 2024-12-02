import AdminLayout from "@/components/layouts/AdminLayout";
import RequireAuth from "@/components/RequireAuth";
import DashboardPage from "@/pages/admin/DashboardPage";
import ProductManagementPage from "@/pages/admin/ProductPage";
import UserManagementPage from "@/pages/admin/UserPage";
import { LandingPage } from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />

				<Route
					path="/admin/*"
					element={
						<RequireAuth>
							<AdminLayout>
								<Routes>
									<Route path="dashboard" element={<DashboardPage />} />
									<Route path="users" element={<UserManagementPage />} />
									<Route path="products" element={<ProductManagementPage />} />
								</Routes>
							</AdminLayout>
						</RequireAuth>
					}
				/>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
