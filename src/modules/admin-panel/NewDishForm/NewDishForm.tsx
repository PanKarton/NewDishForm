import { ChangeEvent, useCallback, useState } from 'react';

const initDishData = {
  name: '',
  preparation_time: '',
  type: '',
  no_of_slices: '',
  diameter: '',
  spiciness_scale: '',
  slices_of_bread: '',
};

export const NewDishForm = () => {
  const [dishType, setDishType] = useState('pizza');
  const [dishData, setDishData] = useState(initDishData);

  console.clear();
  console.table(dishData);

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

  const handleChangeDishType = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setDishType(e.target.value);
      handleUpdateDishData(e);
    },
    [handleUpdateDishData]
  );

  const renderDishOptions = useCallback(() => {
    if (dishType === '') return null;
    if (dishType === 'soup') return <p>soup</p>;
    if (dishType === 'pizza') return <p>pizza</p>;
    if (dishType === 'sandwich') return <p>sandwich</p>;
  }, [dishType]);

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" onChange={handleUpdateDishData} />
      </label>
      <label>
        Preparation time (hh:mm:ss):
        <input
          name="preparation_time"
          value={dishData.preparation_time}
          onChange={handleUpdateDishData}
          type="time"
          step="1"
        ></input>
      </label>
      <label>
        Type:
        <select name="type" onChange={handleChangeDishType}>
          {/* <option value="">Choose dish type</option> */}
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </select>
      </label>
      {renderDishOptions()}
      <input type="submit" value="Submit" />
    </form>
  );
};
