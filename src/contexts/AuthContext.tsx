'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import authService, { User } from '../services/authService';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  remainingTranslations: number;
  isUnlimited: boolean;
  refreshRemainingTranslations: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [remainingTranslations, setRemainingTranslations] = useState(3);
  const [isUnlimited, setIsUnlimited] = useState(false);

  const refreshRemainingTranslations = async () => {
    try {
      const data = await authService.getRemainingTranslations();
      setRemainingTranslations(data.remaining);
      setIsUnlimited(data.unlimited);
    } catch (error) {
      console.error('Failed to fetch remaining translations:', error);
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
        await refreshRemainingTranslations();
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authService.login(email, password);
    setUser(response.user);
    await refreshRemainingTranslations();
  };

  const register = async (email: string, password: string, name?: string) => {
    const response = await authService.register(email, password, name);
    setUser(response.user);
    await refreshRemainingTranslations();
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setRemainingTranslations(3);
    setIsUnlimited(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        remainingTranslations,
        isUnlimited,
        refreshRemainingTranslations
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
