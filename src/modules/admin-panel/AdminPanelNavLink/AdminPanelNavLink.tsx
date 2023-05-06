import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.adminPanel.contrastLighter};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.25rem;
  }
  svg {
    font-size: 1.5rem;
  }
  &:hover {
    color: ${({ theme }) => theme.color.adminPanel.contrastLightest};
  }
  &.active {
    color: ${({ theme }) => theme.color.adminPanel.primary};
  }
`;

type AdminPanelNavLinkProps = {
  href: string;
  children: ReactNode;
};

export const AdminPanelNavLink = ({ href, children }: AdminPanelNavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <StyledLink href={href} className={isActive ? 'active' : ''}>
      {children}
    </StyledLink>
  );
};
