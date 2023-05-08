import { ReactNode } from 'react';
import { Field } from 'react-final-form';
import { StyledWrapper } from './NewDishFormRadioInput.styles';

type NewDishFormRadioInputTypes = {
  name: string;
  dishType: string;
  dishName: string;
  value: string;
  hasError?: boolean;
  children: ReactNode;
};

export const NewDishFormRadioInput = ({
  name,
  children,
  dishType,
  dishName,
  value,
  hasError,
}: NewDishFormRadioInputTypes) => (
  <Field name={name} type="radio">
    {({ input, meta }) => (
      <StyledWrapper>
        <label>
          <input
            {...input}
            value={value}
            checked={dishType === value}
            onChange={event => {
              input.onChange(event);
            }}
          />
          <div className="icon-wrapper">{children}</div>
          <span>{dishName}</span>
        </label>
        {meta.error && meta.touched && hasError && (
          <span className="error-message">{meta.error}</span>
        )}
      </StyledWrapper>
    )}
  </Field>
);
