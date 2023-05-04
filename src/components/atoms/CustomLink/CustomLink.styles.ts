import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;

  a {
    position: relative;
    z-index: 9999;
    text-decoration: none;
    font-weight: 500;
    color: ${({ theme }) => theme.color.contrast};
  }

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
