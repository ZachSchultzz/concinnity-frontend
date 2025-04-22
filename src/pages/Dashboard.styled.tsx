import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  margin: 0;
  padding: 0;
  background: #2c2c54;
  min-height: 100vh;
  display: flex;
  position: relative;
`;

export const Sidebar = styled.nav`
  width: 250px;
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

  &:hover {
    transform: translateX(0);
  }
`;

export const SidebarLink = styled.a`
  display: block;
  color: white;
  padding: 1rem 0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const DashboardContainer = styled.div`
  padding: 2rem;
  flex: 1;
  color: white;
  z-index: 1;
  margin-left: 75px; /* 30% of sidebar width (250px * 0.3) when hidden */
  transition: margin-left 0.3s ease;

  ${Sidebar}:hover ~ & {
    margin-left: 250px; /* Full sidebar width when visible */
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CardValue = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;

export const NotificationsSection = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const Notification = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

export const EmployeeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`;

export const TableHeader = styled.th`
  background: rgba(0, 123, 255, 0.5);
  color: white;
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid rgba(0, 86, 179, 0.5);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ActionButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`;