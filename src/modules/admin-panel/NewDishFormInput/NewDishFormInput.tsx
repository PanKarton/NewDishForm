import { Field } from 'react-final-form';
import { StyledInput, StyledInputWrapper } from './NewDishFormInput.styles';

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
