import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.primaryAccent};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderDivider};
  grid-area: 1 / 2 / 2 / 3;
`;

export const Header = () => <StyledHeader></StyledHeader>;
