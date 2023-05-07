import { ChangeEvent, useCallback, useState } from 'react';

export type DishData = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: string;
  diameter?: string;
  spiciness_scale?: string;
  slices_of_bread?: string;
};

const initDishData = {
  name: '',
  preparation_time: '',
  type: 'pizza',
  no_of_slices: '0',
  diameter: '0',
  spiciness_scale: '0',
  slices_of_bread: '0',
};

export const useNewDishForm = () => {
  const [dishData, setDishData] = useState<DishData>(initDishData);

  // console.clear();
  // console.table(dishData);

  const handleUpdateDishData = useCallback(
    (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { name, value } = e.target;

      setDishData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  return {
    dishData,
    setDishData,
    handleUpdateDishData,
  };
};

// For submit

// if (name === 'diameter') newValue = parseFloat(value) || 0;
// if (name === 'no_of_slices' || name === 'spiciness_scale' || name === 'slices_of_bread')
//   newValue = parseInt(value) || 0;
