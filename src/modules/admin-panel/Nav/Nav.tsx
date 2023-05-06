import { AiOutlineHome, AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { AdminPanelNavLink } from '../AdminPanelNavLink/AdminPanelNavLink';

export const StyledNav = styled.nav`
  grid-area: 1/1/3/2;
  padding: 4rem 0 0 2rem;
  background-color: ${({ theme }) => theme.color.adminPanel.primaryAccent};
`;
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const Nav = () => (
  <StyledNav>
    <StyledList>
      <li>
        <AdminPanelNavLink href="/admin-panel">
          <AiOutlineHome />
          <span>Dashboard</span>
        </AdminPanelNavLink>
      </li>
      <li>
        <AdminPanelNavLink href="/admin-panel/add-new-dish">
          <AiOutlinePlusCircle />
          <span>Add new dish</span>
        </AdminPanelNavLink>
      </li>
    </StyledList>
  </StyledNav>
);
