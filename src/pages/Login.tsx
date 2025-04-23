import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import backgroundImage from '../assets/login-background.png';

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    businessName: '',
    bin: '',
    firstName: '',
    lastName: '',
    password: '',
    pin: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(credentials);
    // Check if login was successful
    setTimeout(() => {
      if (isAuthenticated) {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }, 0); // Small delay to ensure state update
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: `url(${backgroundImage}) no-repeat center center fixed, #2c2c54`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        fontFamily: "'Poppins', Arial, sans-serif",
      }}
    >
      {/* Background Overlay with Blur */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))',
          backdropFilter: 'blur(20px)',
          zIndex: 0,
        }}
      />
      {/* Welcome Text Outside the Box */}
      <div style={{ textAlign: 'center', marginBottom: '2rem', zIndex: 1 }}>
        <h1 style={{ fontSize: '2rem', color: 'white', margin: '0' }}>Welcome to</h1>
        <h1 style={{ fontSize: '3.5rem', fontStyle: 'italic', color: 'white', margin: '0', fontWeight: 700 }}>Concinnity</h1>
      </div>
      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          padding: '2rem',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          color: 'white',
          zIndex: 1,
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {error && <p style={{ color: '#ff4d4d', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
        {/* Row 1: Business Name - BIN */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
          <input
            type="text"
            name="businessName"
            value={credentials.businessName}
            onChange={handleInputChange}
            placeholder="Business Name"
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '5px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: '1rem',
              textAlign: 'center',
            }}
          />
          <input
            type="text"
            name="bin"
            value={credentials.bin}
            onChange={handleInputChange}
            placeholder="BIN"
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '5px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: '1rem',
              textAlign: 'center',
            }}
          />
        </div>
        {/* Row 2: First Name - Last Name */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
          <input
            type="text"
            name="firstName"
            value={credentials.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '5px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: '1rem',
              textAlign: 'center',
            }}
          />
          <input
            type="text"
            name="lastName"
            value={credentials.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '5px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: '1rem',
              textAlign: 'center',
            }}
          />
        </div>
        {/* Row 3: Password - PIN */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '5px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: '1rem',
              textAlign: 'center',
            }}
          />
          <input
            type="text"
            name="pin"
            value={credentials.pin}
            onChange={handleInputChange}
            placeholder="PIN"
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '5px',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: '1rem',
              textAlign: 'center',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '1rem',
            fontFamily: "'Poppins', Arial, sans-serif",
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;