type DishType = {
  no_of_slices: number | undefined;
  diameter: number | undefined;
  spiciness_scale: number | undefined;
  slices_of_bread: number | undefined;
  name: string;
  preparation_time: string;
  type: string;
};

export const removePropertiesFromDish = (dishData: DishType) => {
  const dish = { ...dishData };

  switch (dishData.type) {
    case 'pizza':
      delete dish.spiciness_scale;
      delete dish.slices_of_bread;
      break;
    case 'soup':
      delete dish.slices_of_bread;
      delete dish.no_of_slices;
      delete dish.diameter;
      break;
    case 'sandwich':
      delete dish.no_of_slices;
      delete dish.diameter;
      delete dish.spiciness_scale;
      break;
    default:
      // Return empty object if dishType is unknown
      return dish;
  }

  return dish;
};
