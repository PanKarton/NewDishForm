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
  const [isNavVisible, setNavVisible] = useState(true);

  const toggleNav = useCallback(() => {
    setNavVisible(prevState => !prevState);
  }, []);

  return (
    <StyledWrapper>
      <Header heading={heading} toggleNav={toggleNav} isNavVisible={isNavVisible} />
      <Nav isNavHidden={isNavVisible} />
      <div className="content-wrapper">{children}</div>
    </StyledWrapper>
  );
};
