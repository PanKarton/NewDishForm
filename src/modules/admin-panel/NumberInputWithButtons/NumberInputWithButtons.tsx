import { ChangeEvent, useCallback } from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { StyledButton, StyledInput, StyledWrapper } from './NumberInputWithButtons.styles';

type NumberInputWithButtonsProps = {
  value: number | string | undefined;
  id: string;
  name: string;
  isFloat?: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  setValue: (value: string) => void;
};

export const NumberInputWithButtons = ({
  value,
  id,
  name,
  isFloat,
  onChange,
  setValue,
}: NumberInputWithButtonsProps) => {
  const step = isFloat ? 0.1 : 1;

  // const handleIncrement = useCallback(() => {
  //   if (value === undefined) return;
  //   // Empty input has empty string as target.value, not 0
  //   if (value === '') return setValue(`${step}`);

  //   let newValue: number | string;

  //   if (typeof value === 'string') {
  //     // Change string to number and add step
  //     newValue = (isFloat ? parseFloat(value) : parseInt(value)) + step;
  //     // Change number back to string and if step is 0.1, then leave one digit after decimal point because apparently 0.1 + 0.2 is not 0.3
  //     newValue = newValue.toFixed(isFloat ? 1 : 0);
  //   } else {
  //     newValue = `${value + step}`;
  //   }

  //   setValue(newValue);
  // }, [setValue, value, step, isFloat]);

  // const handleDecrement = useCallback(() => {
  //   // Empty input has empty string as targer.value, not 0
  //   if (value === undefined || value === 0 || value === '0' || value === '0.0' || value === '')
  //     return;

  //   let newValue: number | string;

  //   if (typeof value === 'string') {
  //     // Change string to number and add step
  //     newValue = (isFloat ? parseFloat(value) : parseInt(value)) - step;
  //     // Change number back to string and if step is 0.1, then leave one digit after decimal point because apparently 0.1 + 0.2 is not 0.3
  //     newValue = newValue.toFixed(isFloat ? 1 : 0);
  //   } else {
  //     newValue = `${value - step}`;
  //   }

  //   setValue(newValue);
  // }, [setValue, value, step, isFloat]);

  const handleStep = useCallback(
    (isIncrement: boolean) => {
      if (value === undefined) return;
      // Return if there are any scenarios with decrementing empty string
      if ((value === 0 || value === '0' || value === '0.0' || value === '') && !isIncrement) return;

      // Add negative number if is decrement
      const newStep = isIncrement ? step : step * -1;

      let newValue: number | string;

      if (typeof value === 'string') {
        // Change string to number and add step
        newValue = (isFloat ? parseFloat(value) : parseInt(value)) + newStep;
        // Change number back to string and if step is 0.1, then leave one digit after decimal point because apparently 0.1 + 0.2 is not 0.3
        newValue = newValue.toFixed(isFloat ? 1 : 0);
      } else {
        newValue = `${value + newStep}`;
      }

      setValue(newValue);
    },
    [isFloat, setValue, value, step]
  );

  return (
    <StyledWrapper>
      <StyledButton onClick={() => handleStep(false)}>
        <AiOutlineMinus />
      </StyledButton>
      <StyledInput
        id={id}
        name={name}
        type="number"
        value={value}
        onChange={onChange}
        min={0}
        step={step}
        onKeyDown={event => {
          if (event.key === 'e' || event.key === '.' || event.key === '+' || event.key === '-') {
            event.preventDefault();
          }
        }}
      />
      <StyledButton onClick={() => handleStep(true)}>
        <AiOutlinePlus />
      </StyledButton>
    </StyledWrapper>
  );
};
