import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext';

interface PrivateRouteProps {
  element: React.ReactElement
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
