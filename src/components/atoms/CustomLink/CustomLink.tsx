import Link from 'next/link';
import styled from 'styled-components';

export const CustomLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.pimary};
  color: ${({ theme }) => theme.color.contrast};
  text-decoration: none;
  font-weight: 500;
`;
