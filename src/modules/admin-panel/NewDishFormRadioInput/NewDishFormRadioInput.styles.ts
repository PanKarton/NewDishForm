import styled from 'styled-components';

export const StyledWrapper = styled.div`
  flex-basis: 7rem;
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    input {
      appearance: none;
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.textXL};
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.adminPanel.secondaryAccentLight};
      svg {
        color: ${({ theme }) => theme.color.adminPanel.secondaryAccent};
        font-size: 3rem;
      }
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:has(input:checked) .icon-wrapper {
    background-color: ${({ theme }) => theme.color.adminPanel.secondaryAccent};
    border: 0.25rem solid ${({ theme }) => theme.color.adminPanel.secondaryAccentLight};

    svg {
      color: ${({ theme }) => theme.color.adminPanel.secondaryAccentLight};
    }
  }
`;
