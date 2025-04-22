import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import {
  DashboardContainer,
  TenantInfo,
  TenantTitle,
  TenantDetail,
  EmployeeTable,
  TableHeader,
  TableRow,
  TableCell,
  LogoutButton,
} from './Dashboard.styled.tsx';

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const tenantData = {
    businessName: 'Concinnity',
    bin: '1234',
    employees: [
      { id: 1, name: 'Alice Johnson', role: 'Manager', email: 'alice@concinnity.com', department: 'Sales' },
      { id: 2, name: 'Bob Smith', role: 'Developer', email: 'bob@concinnity.com', department: 'Engineering' },
      { id: 3, name: 'Charlie Brown', role: 'Designer', email: 'charlie@concinnity.com', department: 'Design' },
    ],
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return null; // Prevent rendering until redirect
  }

  return (
    <DashboardContainer>
      <TenantInfo>
        <TenantTitle>{tenantData.businessName} Dashboard</TenantTitle>
        <TenantDetail>BIN: {tenantData.bin}</TenantDetail>
      </TenantInfo>
      <EmployeeTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Department</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tenantData.employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.role}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.department}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </EmployeeTable>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </DashboardContainer>
  );
};

export default Dashboard;