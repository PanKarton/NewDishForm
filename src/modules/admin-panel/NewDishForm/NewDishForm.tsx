import { useCallback } from 'react';
import styled from 'styled-components';
import { useNewDishForm } from './useNewDishForm';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: min(30rem, 90%);
`;
export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewDishForm = () => {
  const { dishData, handleUpdateDishData } = useNewDishForm();

  const renderSoupOptions = useCallback(
    () => (
      <div>
        <label htmlFor="spiciness_scale">Spiciness (1-10):</label>
        <input
          type="range"
          id="spiciness_scale"
          name="spiciness_scale"
          min="1"
          max="10"
          value={dishData.spiciness_scale}
          onChange={handleUpdateDishData}
        />
      </div>
    ),
    [dishData.spiciness_scale, handleUpdateDishData]
  );

  const renderPizzaOptions = useCallback(
    () => (
      <>
        <div>
          <label htmlFor="no_of_slices">Number of slices:</label>
          <input
            type="number"
            id="no_of_slices"
            name="no_of_slices"
            value={dishData.no_of_slices}
            onChange={handleUpdateDishData}
          />
        </div>
        <div>
          <label htmlFor="diameter">Diameter:</label>
          <input
            type="number"
            step="0.1"
            id="diameter"
            name="diameter"
            value={dishData.diameter}
            onChange={handleUpdateDishData}
          />
        </div>
      </>
    ),
    [dishData.no_of_slices, dishData.diameter, handleUpdateDishData]
  );

  const renderSandwichOptions = useCallback(
    () => (
      <>
        <div>
          <label htmlFor="slices_of_bread">Slices of bread:</label>
          <input
            type="number"
            id="slices_of_bread"
            name="slices_of_bread"
            value={dishData.slices_of_bread}
            onChange={handleUpdateDishData}
          />
        </div>
      </>
    ),
    [dishData.slices_of_bread, handleUpdateDishData]
  );

  const renderDishOptions = useCallback(() => {
    if (dishData.type === '') return null;
    if (dishData.type === 'soup') return renderSoupOptions();
    if (dishData.type === 'pizza') return renderPizzaOptions();
    if (dishData.type === 'sandwich') return renderSandwichOptions();
  }, [dishData.type, renderSoupOptions, renderPizzaOptions, renderSandwichOptions]);

  return (
    <StyledForm>
      <StyledInputWrapper>
        <label>Dish name:</label>
        <input type="text" name="name" onChange={handleUpdateDishData} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Preparation time (hh:mm:ss):</label>
        <input
          name="preparation_time"
          value={dishData.preparation_time}
          onChange={handleUpdateDishData}
          type="time"
          step="1"
        ></input>
      </StyledInputWrapper>

      <StyledInputWrapper>
        <label>Type:</label>
        <select name="type" onChange={handleUpdateDishData}>
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </select>
      </StyledInputWrapper>
      {renderDishOptions()}
      <input type="submit" value="Submit" />
    </StyledForm>
  );
};
