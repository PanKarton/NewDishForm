import { Header } from '@/modules/admin-panel/Header/Header';
import { Nav } from '@/modules/admin-panel/Nav/Nav';
import { ReactNode } from 'react';
import { StyledWrapper } from './AdminDashboard.styles';

type AdminDashboardProps = {
  children: ReactNode;
  heading: string;
};

export const AdminDashboard = ({ children, heading }: AdminDashboardProps) => (
  <StyledWrapper>
    <Header heading={heading} />
    <Nav />
    <div className="content-wrapper">{children}</div>
  </StyledWrapper>
);
