import { AiOutlineHome, AiOutlinePlusCircle } from 'react-icons/ai';
import { AdminPanelNavLink } from '../AdminPanelNavLink/AdminPanelNavLink';
import { StyledList, StyledNav } from './Nav.styles';

type NavProps = {
  isNavHidden: boolean;
};

export const Nav = ({ isNavHidden }: NavProps) => {
  return (
    <StyledNav className={isNavHidden ? 'visible' : ''}>
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
};
