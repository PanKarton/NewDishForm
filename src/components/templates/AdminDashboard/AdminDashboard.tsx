import { Header } from '@/modules/admin-panel/Header/Header';
import { Nav } from '@/modules/admin-panel/Nav/Nav';
import { ReactNode } from 'react';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 17rem 1fr;
  grid-template-rows: 4rem 1fr;
  height: 100vh;

  .content-wrapper {
    grid-area: 2/2/3/3;
  }
`;

type AdminDashboardProps = {
  children: ReactNode;
};

export const AdminDashboard = ({ children }: AdminDashboardProps) => (
  <StyledWrapper>
    <Header />
    <Nav />
    <div className="content-wrapper">{children}</div>
  </StyledWrapper>
);
