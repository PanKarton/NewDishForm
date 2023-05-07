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

export const useNewDishForm = () => {
  const onSubmit = useCallback((values: DishData) => {
    console.table(values);
  }, []);

  const handleValidate = useCallback((values: DishData) => {
    const errors: Partial<DishData> = {};

    if (!values.name) {
      errors.name = 'Dish name required.';
      console.log('Error z nazwwą');
    }
    if (!values.preparation_time) {
      errors.preparation_time = 'Preparation time required.';
      console.log('Error z czasem przygotowania');
    }
    if (!values.type) {
      errors.type = 'Dish type required.';
      console.log('Error z czasem przygotowania');
    }
    switch (values.type) {
      case 'pizza':
        if (!values.no_of_slices) {
          errors.no_of_slices = 'Number of slices required.';
          console.log('Error z no of slices');
        }
        if (!values.diameter) {
          errors.diameter = 'Diameter required.';
          console.log('Error z diameter');
        }
        break;
      case 'soup':
        if (!values.spiciness_scale) {
          errors.spiciness_scale = 'Spiciness required.';
          console.log('Error z spiciness');
        }
        break;
      case 'sandwich':
        if (!values.slices_of_bread) {
          errors.slices_of_bread = 'Number of slices of bread required.';
          console.log('Error z no of slices of breat');
        }
    }
    return errors;
  }, []);

  return {
    handleValidate,
    onSubmit,
  };
};

// For submit

// if (name === 'diameter') newValue = parseFloat(value) || 0;
// if (name === 'no_of_slices' || name === 'spiciness_scale' || name === 'slices_of_bread')
//   newValue = parseInt(value) || 0;
