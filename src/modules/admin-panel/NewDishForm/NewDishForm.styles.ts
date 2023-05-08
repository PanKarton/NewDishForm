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
  border: 2px solid ${({ theme }) => theme.color.adminPanel.secondaryAccentLight};
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
    border: 2px solid ${({ theme }) => theme.color.adminPanel.secondaryAccent};
    outline: none;
  }
`;

export const StyleddRangeInput = styled.input`
  width: 30rem;

  -webkit-appearance: none;
  height: 20px;
  width: 80%;
  margin: 0;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.color.adminPanel.secondaryAccentLight};
    border: none;
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.adminPanel.secondaryAccent};
    margin-top: -8px;
    cursor: pointer;
  }
`;

export const StyledRadioInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.color.borderDivider};
  color: ${({ theme }) => theme.color.adminPanel.contrastLighter};
  width: 100%;
  padding: 2rem 1rem;
  position: relative;

  .dish-type {
    font-size: ${({ theme }) => theme.fontSize.textXL};
    font-weight: 600;
  }

  .inputs-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

    div {
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
    }
  }
  .error-message {
    position: absolute;
    left: 50%;
    bottom: 0.5rem;
    translate: -50% 0;
    width: max-content;

    color: red;
  }
`;

export const StyledSubmit = styled.button`
  background-color: ${({ theme }) => theme.color.adminPanel.secondaryAccent};
  border: none;
  border-radius: 0.25rem;
  padding-block: 1rem;
  width: min(20rem, 90%);
  color: ${({ theme }) => theme.color.adminPanel.primary};
  font-size: 1.375rem;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.adminPanel.secondaryAccentHover};
  }
`;
