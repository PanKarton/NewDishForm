import styled from 'styled-components';

export const StyledNav = styled.nav`
  grid-area: 2/1/3/2;
  padding: 3rem 0 0 2rem;
  background-color: ${({ theme }) => theme.color.adminPanel.primaryAccent};
  z-index: 1;
  transition: translate 250ms ease-in-out;
  translate: -110% 0;

  &.visible {
    translate: 0 0;
  }
  @media screen and (min-width: 53rem) {
    translate: 0 0;
    grid-area: 1/1/3/2;
    padding-top: 4.5rem;
  }
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
