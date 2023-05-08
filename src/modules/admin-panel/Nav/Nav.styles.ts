import styled from 'styled-components';

export const StyledNav = styled.nav`
  grid-area: 2/1/3/2;
  padding: 4rem 0 0 2rem;
  background-color: ${({ theme }) => theme.color.adminPanel.primaryAccent};
  z-index: 1;
  transition: translate 250ms ease-in-out;

  &.hidden {
    translate: -110% 0;
    @media screen and (min-width: 53rem) {
      translate: 0 0;
    }
  }
  @media screen and (min-width: 53rem) {
    grid-area: 1/1/3/2;
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
