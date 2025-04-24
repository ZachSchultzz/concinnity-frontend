import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Credentials {
  businessName: string;
  bin: string;
  firstName: string;
  lastName: string;
  password: string;
  pin: string;
}

interface AuthContextType {
  user: Credentials | null;
  isAuthenticated: boolean;
  login: (credentials: Credentials) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Credentials | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const savedUser = localStorage.getItem('user');
    return !!savedUser;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('user');
      setIsAuthenticated(false);
    }
  }, [user]);

  const login = (credentials: Credentials) => {
    console.log('Login attempt with credentials:', credentials);

    // Validate credentials
    const isValid =
      credentials.businessName.toLowerCase() === 'concinnity' &&
      credentials.bin === '1234' &&
      credentials.firstName.toLowerCase() === 'zach' &&
      credentials.lastName.toLowerCase() === 'schultz' &&
      credentials.password === 'Password123' &&
      credentials.pin === '4321';

    if (isValid) {
      setUser(credentials);
      console.log('User authenticated:', credentials);
    } else {
      setUser(null);
      setIsAuthenticated(false);
      console.log('Authentication failed');
    }
  };

  const logout = () => {
    console.log('Logging out user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
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