import { ChangeEvent, useCallback } from 'react';

type IntigerNumberInputProps = {
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  value: number | undefined;
  id: string;
  name: string;
  setValue: (value: number) => void;
};

export const IntigerNumberInput = ({
  onChange,
  value,
  id,
  name,
  setValue,
}: IntigerNumberInputProps) => {
  const handleIncrement = useCallback(() => {
    if (value !== undefined) {
      setValue(value + 1);
    }
  }, [setValue, value]);

  const handleDecrement = useCallback(() => {
    if (value !== undefined) {
      setValue(value - 1);
    }
  }, [setValue, value]);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input id={id} name={name} type="number" value={value} onChange={onChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
