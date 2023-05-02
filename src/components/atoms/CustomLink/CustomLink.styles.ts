import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.color.contrast};
`;

export const StyledWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 0.0625rem solid ${({ theme }) => theme.color.primaryAccent};
    translate: 0.25rem -0.25rem;
    transition: translate 250ms;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::after {
    translate: -0.25rem 0.25rem;
  }
`;
