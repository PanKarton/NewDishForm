import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.adminPanel.primaryAccentLighter};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.textBase};
  }
  svg {
    font-size: ${({ theme }) => theme.fontSize.text2XL};
  }
  &:hover {
    color: ${({ theme }) => theme.color.adminPanel.primaryAccentLightest};
  }
  &.active {
    color: ${({ theme }) => theme.color.adminPanel.primary};
  }
`;
