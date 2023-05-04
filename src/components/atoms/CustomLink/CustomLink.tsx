import Link from 'next/link';
import { ReactNode } from 'react';
import { StyledWrapper } from './CustomLink.styles';

type CustomLinkTypes = {
  children: ReactNode;
  href: string;
};

export const CustomLink = ({ children, href }: CustomLinkTypes) => {
  return (
    <StyledWrapper>
      <Link href={href}>{children}</Link>
    </StyledWrapper>
  );
};
