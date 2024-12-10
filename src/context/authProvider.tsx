import { useState, ReactNode } from "react";
import { AuthContext, AuthContextType } from "./authContext";

type User = {
	role: "admin" | "customer";
	username: string;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	const login = (userData: User) => {
		setUser(userData);
	};

	const logout = () => {
		setUser(null);
	};

	const value: AuthContextType = {
		user,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
