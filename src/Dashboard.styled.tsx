import styled from 'styled-components';

export const DashboardContainer = styled.div`
  margin: 0;
  padding: 2rem;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TenantInfo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const TenantTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin: 0;
`;

export const TenantDetail = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
`;

export const EmployeeTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background: #007bff;
  color: white;
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #0056b3;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

export const LogoutButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #cc0000;
  }
`;