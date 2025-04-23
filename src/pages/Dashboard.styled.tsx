import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/login-background.png';

export const DashboardWrapper = styled.div`
  margin: 0;
  padding: 0;
  background: url(${backgroundImage}) no-repeat center center fixed, #2c2c54;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  position: relative;
  font-family: 'Poppins', Arial, sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
    backdrop-filter: blur(20px); /* Heavy blur effect */
    z-index: 0;
  }
`;

export const Sidebar = styled.nav`
  width: 200px; /* Reduced from 250px */
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem;
  height: 100vh;
  position: fixed;
  color: white;
  transform: translateX(-70%);
  transition: transform 0.3s ease;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 10;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateX(0);
  }
`;

export const SidebarLink = styled(Link)`
  display: block;
  color: white;
  padding: 1rem 0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 8px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
`;

export const DashboardContainer = styled.div`
  padding: 3rem;
  flex: 1;
  color: white;
  z-index: 1;
  margin-left: 200px; /* Adjusted for new sidebar width */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

export const TenantTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
`;

export const TenantDetail = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const UserGreeting = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Reduced card width */
  gap: 1.5rem;
  margin-bottom: 3rem;
  max-width: 800px; /* Limit width for centering */
  width: 100%;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 1.5rem; /* Reduced padding */
  border-radius: 15px;
  backdrop-filter: blur(10px);
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem; /* Reduced font size */
  font-weight: 600;
`;

export const CardValue = styled.p`
  margin: 0;
  font-size: 1rem; /* Reduced font size */
`;

export const NotificationsSection = styled.div`
  margin-bottom: 3rem;
  max-width: 800px; /* Limit width for centering */
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const Notification = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
`;

export const EmployeeTable = styled.table`
  width: 100%;
  max-width: 800px; /* Limit width for centering */
  border-collapse: collapse;
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const TableHeader = styled.th`
  background: rgba(0, 123, 255, 0.5);
  color: white;
  padding: 1.5rem;
  text-align: left;
  border-bottom: 2px solid rgba(0, 86, 179, 0.5);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const TableCell = styled.td`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ActionButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: #0056b3;
  }
`;

export const LogoutButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    background: #cc0000;
  }
`;