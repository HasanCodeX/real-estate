// src/Component/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';  // Importing the hook
import { auth } from '../firebase-config'; // Firebase config

const ProtectedRoute = ({ Component }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;  // Redirect to login if not authenticated

  return <Component />;
};

export default ProtectedRoute;
