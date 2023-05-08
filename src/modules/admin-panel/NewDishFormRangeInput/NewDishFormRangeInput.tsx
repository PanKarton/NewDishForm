import { Field } from 'react-final-form';
import { StyledInputWrapper, StyledRangeInput } from './NewDishFormRangeInput.styles';

type NewDishFormRangeInputProps = {
  spiciness: string | undefined;
  label: string;
};

export const NewDishFormRangeInput = ({ spiciness, label }: NewDishFormRangeInputProps) => {
  return (
    <Field name="spiciness_scale">
      {({ input, meta }) => (
        <StyledInputWrapper>
          <label htmlFor="spiciness_scale">{label}</label>
          <StyledRangeInput
            type="range"
            {...input}
            id="spiciness_scale"
            min="1"
            max="10"
            onChange={event => {
              input.onChange(event);
            }}
          />
          <div className="spiciness-display">{spiciness}</div>
          {meta.error && meta.touched && <span className="error-message">{meta.error}</span>}
        </StyledInputWrapper>
      )}
    </Field>
  );
};
