// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState('');

  const getAuthToken = async () => {
    const token = localStorage.getItem('authToken');
    console.log('Token from localStorage:', token); 
    return token;
  };

  useEffect(() => {
    getAuthToken().then((token) => {
      setAuthToken(token || '');
    });
  }, []);

  const contextValue = {
    authToken,
    setAuthToken,
    getAuthToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
