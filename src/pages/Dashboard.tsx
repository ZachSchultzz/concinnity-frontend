import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import Layout from './Layout.tsx';
import {
  Header,
  TenantTitle,
  UserGreeting,
  CardsSection,
  Card,
  CardTitle,
  CardValue,
  NotificationsSection,
  SectionTitle,
  Notification,
  EmployeeTable,
  TableHeader,
  TableRow,
  TableCell,
  ActionButton,
} from './Dashboard.styled.tsx';

const Dashboard = () => {
  console.log('Dashboard component rendering');

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const tenantData = {
    businessName: 'Concinnity',
    bin: '1234',
    user: {
      firstName: 'Zach',
      lastName: 'Schultz',
    },
    employees: [
      { id: 1, name: 'Alice Johnson', role: 'Manager', email: 'alice@concinnity.com', department: 'Sales', status: 'Active' },
      { id: 2, name: 'Bob Smith', role: 'Developer', email: 'bob@concinnity.com', department: 'Engineering', status: 'Active' },
      { id: 3, name: 'Charlie Brown', role: 'Designer', email: 'charlie@concinnity.com', department: 'Design', status: 'On Leave' },
    ],
    tasks: [
      { id: 1, title: 'Design Homepage', assignedTo: 'Charlie Brown', dueDate: '2025-04-25', status: 'In Progress' },
      { id: 2, title: 'Develop API', assignedTo: 'Bob Smith', dueDate: '2025-04-30', status: 'Not Started' },
    ],
    messages: [
      { id: 1, sender: 'Alice Johnson', content: 'Team meeting at 3 PM', timestamp: '2025-04-21T14:00:00' },
      { id: 2, sender: 'Bob Smith', content: 'Need feedback on API design', timestamp: '2025-04-21T09:00:00' },
    ],
    notifications: [
      { id: 1, content: 'New message from Alice Johnson', timestamp: '2025-04-21T14:00:00' },
      { id: 2, content: 'Task "Design Homepage" assigned to Charlie Brown', timestamp: '2025-04-20T10:00:00' },
    ],
    analytics: {
      activeUsers: 15,
      completedTasks: 8,
      pendingTasks: 5,
    },
  };

  const handleViewDetails = (employeeId: number) => {
    alert(`View details for employee ID: ${employeeId}`);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <Header>
        <TenantTitle>{tenantData.businessName} Dashboard</TenantTitle>
        <UserGreeting>Welcome, {tenantData.user.firstName} {tenantData.user.lastName}</UserGreeting>
      </Header>
      <CardsSection>
        <Card>
          <CardTitle>Tasks</CardTitle>
          <CardValue>{tenantData.tasks.length} Active</CardValue>
        </Card>
        <Card>
          <CardTitle>Messages</CardTitle>
          <CardValue>{tenantData.messages.length} Unread</CardValue>
        </Card>
        <Card>
          <CardTitle>Team</CardTitle>
          <CardValue>{tenantData.employees.length} Members</CardValue>
        </Card>
        <Card>
          <CardTitle>Analytics</CardTitle>
          <CardValue>{tenantData.analytics.activeUsers} Active Users</CardValue>
        </Card>
      </CardsSection>
      <NotificationsSection>
        <SectionTitle>Notifications</SectionTitle>
        {tenantData.notifications.map((notification) => (
          <Notification key={notification.id}>
            {notification.content} - {new Date(notification.timestamp).toLocaleString()}
          </Notification>
        ))}
      </NotificationsSection>
      <SectionTitle>Employees</SectionTitle>
      <EmployeeTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tenantData.employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.role}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.status}</TableCell>
              <TableCell>
                <ActionButton onClick={() => handleViewDetails(employee.id)}>View Details</ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </EmployeeTable>
    </Layout>
  );
};

export default Dashboard;