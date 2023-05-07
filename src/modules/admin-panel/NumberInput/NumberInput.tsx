import { ChangeEvent } from 'react';
import { StyledInput, StyledWrapper } from './NumberInput.styles';
type NumberInputWithButtonsProps = {
  value: string;
  id: string;
  name: string;
  isFloat?: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

export const NumberInputWithButtons = ({
  value,
  id,
  onChange,
  name,
  isFloat,
}: NumberInputWithButtonsProps) => {
  const step = isFloat ? 0.1 : 1;
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};
