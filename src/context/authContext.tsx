import { createContext } from "react";

type User = {
	role: "admin" | "customer";
	username: string;
};

export type AuthContextType = {
	user: User | null;
	login: (user: User) => void;
	logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);
