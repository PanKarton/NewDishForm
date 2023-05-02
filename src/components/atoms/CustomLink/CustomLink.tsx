import { ReactNode } from 'react';
import { StyledLink, StyledWrapper } from './CustomLink.styles';

type CustomLinkTypes = {
  children: ReactNode;
  href: string;
};

export const CustomLink = ({ children, href }: CustomLinkTypes) => {
  return (
    <StyledWrapper>
      <StyledLink href={href}>{children}</StyledLink>
    </StyledWrapper>
  );
};
