import { ChangeEvent, useCallback, useState } from 'react';

export type DishData = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
};

const initDishData = {
  name: '',
  preparation_time: '',
  type: 'pizza',
  no_of_slices: 0,
  diameter: 0,
  spiciness_scale: 0,
  slices_of_bread: 0,
};

export const useNewDishForm = () => {
  const [dishData, setDishData] = useState<DishData>(initDishData);

  console.clear();
  console.table(dishData);

  const handleUpdateDishData = useCallback(
    (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log(typeof value);

      let newValue: number | string = value;

      //   Transform to float/int
      if (
        (name === 'diameter' ||
          name === 'no_of_slices' ||
          name === 'spiciness_scale' ||
          name === 'slices_of_bread') &&
        newValue === ''
      ) {
        return console.log('dzialam');
      }

      if (name === 'diameter') newValue = parseFloat(value) || 0;
      if (name === 'no_of_slices' || name === 'spiciness_scale' || name === 'slices_of_bread')
        newValue = parseInt(value) || 0;

      setDishData(prevData => ({
        ...prevData,
        [name]: newValue,
      }));
    },
    []
  );
  return {
    dishData,
    handleUpdateDishData,
  };
};
