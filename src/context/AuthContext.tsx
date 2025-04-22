import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  console.log('AuthProvider rendering');

  try {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
      localStorage.getItem('isAuthenticated') === 'true'
    );

    const login = () => {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    };

    const logout = () => {
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
    };

    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  } catch (error) {
    console.error('Error in AuthProvider:', error);
    return <div>Error in authentication provider. Please refresh the page.</div>;
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};