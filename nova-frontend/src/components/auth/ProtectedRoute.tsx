import React, { useContext } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
