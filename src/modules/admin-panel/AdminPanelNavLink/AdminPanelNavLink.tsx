import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { StyledLink } from './AdminPanelNavLink.styles';

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
