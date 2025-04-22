import styled from 'styled-components';
import backgroundImage from '../assets/login-background.png';

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  background: url(${backgroundImage}) no-repeat center center fixed, #2c2c54; /* Fallback color */
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Poppins', Arial, sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  gap: 0.5rem;
`;

export const WelcomeText = styled.h2`
  font-size: 3rem;
  color: white;
  margin: 0;
  font-family: 'Poppins', Arial, sans-serif;
`;

export const ConcinnityText = styled.h1`
  font-size: 5rem;
  color: white;
  font-weight: bold;
  font-style: italic;
  margin: 0;
  font-family: 'Poppins', Arial, sans-serif;
`;

export const Form = styled.form`
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 15px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-family: 'Poppins', Arial, sans-serif;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Button = styled.button`
  background: #ffffff;
  border: none;
  padding: 0.75rem;
  border-radius: 25px;
  color: #1a1a1a;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  align-self: center;
  width: 100px;
  font-family: 'Poppins', Arial, sans-serif;
`;

export const ForgotLink = styled.a`
  color: #ffffff;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 0.5rem;
  text-align: center;
  font-family: 'Poppins', Arial, sans-serif;
`;

export const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
  font-family: 'Poppins', Arial, sans-serif;
`;