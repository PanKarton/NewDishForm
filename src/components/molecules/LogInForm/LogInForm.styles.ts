import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1.5rem;
  padding-inline: 1rem;

  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .error-message {
    color: ${({ theme }) => theme.color.error};
    font-size: ${({ theme }) => theme.fontSize.textSM};
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.color.primary};
  border: 0.0625rem solid ${({ theme }) => theme.color.contrastTransparent};
  border-radius: 0.25rem;
  font-size: ${({ theme }) => theme.fontSize.textSM};
  padding: 0.75rem 0.75rem;
  font-weight: 500;
  width: 100%;

  &:focus {
    outline: 0.125rem solid ${({ theme }) => theme.color.primaryAccent};
    border-color: transparent;
  }
`;

export const StyledSubmit = styled.button`
  background-color: ${({ theme }) => theme.color.primaryAccent};
  border: 0.0625rem solid ${({ theme }) => theme.color.contrastBorder};
  color: ${({ theme }) => theme.color.primary};

  font-size: ${({ theme }) => theme.fontSize.textLG};
  font-weight: 500;
  border-radius: 0.25rem;
  padding: 0.75rem 0.75rem;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primaryAccentLighter};
  }
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  height: 1.25rem;

  & > label {
    line-height: 1rem;
    font-size: ${({ theme }) => theme.fontSize.textSM};
  }

  input[type='checkbox']:checked {
    accent-color: ${({ theme }) => theme.color.primaryAccent};
  }

  &:hover > label {
    cursor: pointer;
  }
`;
