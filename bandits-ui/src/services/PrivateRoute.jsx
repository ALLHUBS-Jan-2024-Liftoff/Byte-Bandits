import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticated, children }) => {
  if (authenticated === null) {
    return null; // or a loading spinner or any other loading indicator
  }

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;