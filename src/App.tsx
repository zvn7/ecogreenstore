import { AuthProvider } from "./context/authProvider";
import AppRoutes from "./routes/Route";

function App() {
	return (
		<>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</>
	);
}

export default App;
