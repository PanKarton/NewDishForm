import { Header } from '@/modules/admin-panel/Header/Header';
import { Nav } from '@/modules/admin-panel/Nav/Nav';
import { ReactNode, useCallback } from 'react';
import { StyledWrapper } from './AdminDashboard.styles';
import { useState } from 'react';

type AdminDashboardProps = {
  children: ReactNode;
  heading: string;
};

export const AdminDashboard = ({ children, heading }: AdminDashboardProps) => {
  const [isNavHidden, setIsNavHidden] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavHidden(prevState => !prevState);
  }, []);

  return (
    <StyledWrapper>
      <Header heading={heading} toggleNav={toggleNav} isNavHidden={isNavHidden} />
      <Nav isNavHidden={isNavHidden} />
      <div className="content-wrapper">{children}</div>
    </StyledWrapper>
  );
};
