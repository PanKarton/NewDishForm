import { useCallback } from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';

// =------------------------------------

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

// ---------------------------------------

type ReactFinalFormInputProps = {
  name: string;
  type: string;
  step?: string;
  label: string;
};

export const NewDishFormInput = ({ name, type, step, label }: ReactFinalFormInputProps) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <StyledInputWrapper>
          <label htmlFor={name}>{label}</label>
          <StyledInput
            {...input}
            id={name}
            onChange={event => input.onChange(event)}
            type={type}
            onKeyDown={event => {
              if (
                (event.key === 'e' ||
                  event.key === '.' ||
                  event.key === '+' ||
                  event.key === '-') &&
                type === 'number'
              ) {
                event.preventDefault();
              }
            }}
            step={type === 'number' || type === 'time' ? step : undefined}
            min={0}
          />
          {meta.error && meta.touched && <span className="error-message">{meta.error}</span>}
        </StyledInputWrapper>
      )}
    </Field>
  );
};
