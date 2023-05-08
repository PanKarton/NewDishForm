import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  color: ${({ theme }) => theme.color.adminPanel.contrastLighter};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.borderDivider};
  width: 100%;
  padding-block: 3rem;

  label {
    font-size: ${({ theme }) => theme.fontSize.textXL};
    font-weight: 600;
  }

  .spiciness-display {
    font-size: ${({ theme }) => theme.fontSize.textXL};
    font-weight: 600;
  }

  .error-message {
    color: ${({ theme }) => theme.color.error};
  }
`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.color.adminPanel.contrastLighter};
  border: 0.125rem solid ${({ theme }) => theme.color.adminPanel.secondaryAccentLight};
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.textXL};
  border-radius: 0.25rem;
  width: min(30rem, 90%);
  text-align: center;

  &:hover,
  &::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
  }

  &:focus {
    border: 0.125rem solid ${({ theme }) => theme.color.adminPanel.secondaryAccent};
    outline: none;
  }
`;
