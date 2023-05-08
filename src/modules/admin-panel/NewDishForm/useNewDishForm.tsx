import { removePropertiesFromDish } from '@/helpers/removePropertiesFromDish';
import { useCallback, useState } from 'react';

export type DishData = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: string;
  diameter?: string;
  spiciness_scale?: string;
  slices_of_bread?: string;
};

export const useNewDishForm = () => {
  const [submitError, setSubmitError] = useState('');
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState('');

  const onSubmit = useCallback(async (dishData: DishData) => {
    try {
      // Change string values to number
      const { no_of_slices, diameter, slices_of_bread, spiciness_scale, ...rest } = dishData;

      let newData = {
        ...rest,
        no_of_slices: no_of_slices ? parseInt(no_of_slices, 10) : undefined,
        diameter: diameter ? parseFloat(diameter) : undefined,
        spiciness_scale: spiciness_scale ? parseInt(spiciness_scale, 10) : undefined,
        slices_of_bread: slices_of_bread ? parseInt(slices_of_bread, 10) : undefined,
      };

      newData = removePropertiesFromDish(newData);

      const body = JSON.stringify(newData);

      const responseJSON = await fetch(
        'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        }
      );

      const response = await responseJSON.json();

      if (Object.keys(response).length === 1) {
        setSubmitError(response.name);
        // Hide error after 5sec
        setTimeout(() => setSubmitError(''), 5000);
      } else {
        setSubmitSuccessMessage('New dish added!');
        // Hide error after 5sec
        setTimeout(() => setSubmitSuccessMessage(''), 3000);
      }
    } catch (err) {
      setSubmitError(err.message);
      // Hide error after 5sec
      setTimeout(() => setSubmitError(''), 5000);
    }
  }, []);

  const handleValidate = useCallback((values: DishData) => {
    const errors: Partial<DishData> = {};

    if (!values.name) {
      errors.name = 'Dish name required.';
    }
    if (!values.preparation_time) {
      errors.preparation_time = 'Preparation time required.';
    }
    if (!values.type) {
      errors.type = 'Dish type required.';
    }
    switch (values.type) {
      case 'pizza':
        if (!values.no_of_slices) {
          errors.no_of_slices = 'Number of slices required.';
        }
        if (!values.diameter) {
          errors.diameter = 'Diameter required.';
        }
        break;
      case 'soup':
        if (!values.spiciness_scale) {
          errors.spiciness_scale = 'Spiciness required.';
        }
        break;
      case 'sandwich':
        if (!values.slices_of_bread) {
          errors.slices_of_bread = 'Number of slices of bread required.';
        }
    }
    return errors;
  }, []);

  return {
    submitError,
    submitSuccessMessage,
    handleValidate,
    onSubmit,
  };
};
