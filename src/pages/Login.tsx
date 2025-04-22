import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import {
  PageContainer,
  Container,
  Header,
  WelcomeText,
  ConcinnityText,
  Form,
  InputRow,
  Input,
  Button,
  ForgotLink,
  ErrorMessage,
} from './Login.styled.tsx';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    businessName: '',
    bin: '',
    firstName: '',
    lastName: '',
    password: '',
    pin: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validCredentials = {
      businessName: 'Concinnity',
      bin: '1234',
      firstName: 'Zach',
      lastName: 'Schultz',
      password: 'Password123',
      pin: '4321',
    };

    if (
      formData.businessName === validCredentials.businessName &&
      formData.bin === validCredentials.bin &&
      formData.firstName === validCredentials.firstName &&
      formData.lastName === validCredentials.lastName &&
      formData.password === validCredentials.password &&
      formData.pin === validCredentials.pin
    ) {
      login(); // Set authenticated state
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <PageContainer>
      <Container>
        <Header>
          <WelcomeText>Welcome To</WelcomeText>
          <ConcinnityText>Concinnity</ConcinnityText>
        </Header>
        <Form onSubmit={handleLogin}>
          <InputRow>
            <Input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="bin"
              placeholder="BIN"
              value={formData.bin}
              onChange={handleChange}
              required
            />
          </InputRow>
          <InputRow>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </InputRow>
          <InputRow>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="pin"
              placeholder="PIN"
              value={formData.pin}
              onChange={handleChange}
              required
            />
          </InputRow>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Login</Button>
          <ForgotLink href="/forgot-password">Forgot Password</ForgotLink>
        </Form>
      </Container>
    </PageContainer>
  );
};

export default Login;