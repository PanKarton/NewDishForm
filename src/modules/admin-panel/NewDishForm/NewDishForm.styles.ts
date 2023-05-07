import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(50rem, 90%);
`;
export const StyledInputWrapper = styled.div`
  color: ${({ theme }) => theme.color.adminPanel.contrastLighter};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderDivider};
  width: 100%;
  padding-block: 3rem;

  label {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.color.adminPanel.contrastLighter};
  border: 2px solid ${({ theme }) => theme.color.adminPanel.contrastLighter};
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  width: 30rem;

  &:hover,
  &::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.adminPanel.secondaryAccent};
    outline: none;
  }
`;
