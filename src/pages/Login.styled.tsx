import styled from 'styled-components';
import backgroundImage from '../assets/Login Background.png';

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
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
  text-transform: none;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ConcinnityText = styled.h1`
  font-size: 5rem;
  color: white;
  font-weight: bold;
  font-style: italic;
  text-transform: none;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 480px) {
    width: 90%;
  }
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
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
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
  transition: background 0.3s ease;
  align-self: center;
  width: 100px;
  &:hover {
    background: #e0e0e0;
  }
`;

export const ForgotLink = styled.a`
  color: #ffffff;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 0.5rem;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
`;