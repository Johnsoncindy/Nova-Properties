/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, ReactNode, FC, useEffect } from "react";

// Define the type for the context value
interface AuthContextType {
    currentUser: any;
    updateUser: (data: any) => void;
}

// Provide a default value for the context
const defaultAuthContextValue: AuthContextType = {
    currentUser: null,
    updateUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem("User");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const updateUser = (data: any) => {
        setCurrentUser(data);
    }

    useEffect(() => {
        localStorage.setItem("User", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
