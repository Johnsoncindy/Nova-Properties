/* eslint-disable @typescript-eslint/no-explicit-any */
// AuthContext.tsx

import { createContext, useState, ReactNode, FC, useEffect } from "react";

interface AuthContextType {
    currentUser: any;
    authenticated: boolean;
    updateUser: (data: any) => void;
}

const defaultAuthContextValue: AuthContextType = {
    currentUser: null,
    authenticated: false,
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

    const authenticated = !!currentUser; // Check if currentUser exists

    const updateUser = (data: any) => {
        setCurrentUser(data);
    }

    useEffect(() => {
        localStorage.setItem("User", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, authenticated, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
