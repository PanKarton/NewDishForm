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

export const StyledRangeInput = styled.input`
  width: 30rem;

  -webkit-appearance: none;
  height: 1.25rem;
  width: 80%;
  margin: 0;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.adminPanel.secondaryAccentLight};
    border: none;
    border-radius: 0.1875rem;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.adminPanel.secondaryAccent};
    margin-top: -0.5rem;
    cursor: pointer;
  }
`;
