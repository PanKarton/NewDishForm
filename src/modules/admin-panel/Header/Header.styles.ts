import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.borderDivider};
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-inline: 1rem;
  @media screen and (min-width: 53rem) {
    grid-area: 1 / 2 / 2 / 3;
    gap: 1rem;
    .hamburger-wrapper {
      display: none;
    }
  }
`;

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.textBase};
  @media screen and (min-width: 53rem) {
    font-size: ${({ theme }) => theme.fontSize.text2XL};
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.textBase};
  margin-left: auto;

  @media screen and (min-width: 53rem) {
    font-size: ${({ theme }) => theme.fontSize.textXL};
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;

    &:hover > svg {
      cursor: pointer;
      color: ${({ theme }) => theme.color.adminPanel.contrastLighter};
    }
  }

  svg {
    font-size: ${({ theme }) => theme.fontSize.text3XL};
    color: ${({ theme }) => theme.color.adminPanel.contrast};
  }
`;
