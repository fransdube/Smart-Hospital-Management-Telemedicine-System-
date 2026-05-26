import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'patient' | 'doctor' | 'admin' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Initialize from localStorage if available
  useEffect(() => {
    const savedUser = localStorage.getItem('afya_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (role: Role) => {
    const mockUser: User = {
      id: role === 'doctor' ? 'doc-1' : role === 'admin' ? 'admin-1' : 'pat-1',
      name: role === 'doctor' ? 'Dr. Johnson' : role === 'admin' ? 'Admin User' : 'John Doe',
      email: `${role}@example.com`,
      role,
    };
    setUser(mockUser);
    localStorage.setItem('afya_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('afya_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
