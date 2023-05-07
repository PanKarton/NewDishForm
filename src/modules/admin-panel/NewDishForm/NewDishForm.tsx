import { useCallback } from 'react';
import {
  StyleddRangeInput,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledRadioInputWrapper,
} from './NewDishForm.styles';
import { useNewDishForm } from './useNewDishForm';
import { FaPizzaSlice } from 'react-icons/fa';
import { BiBowlHot } from 'react-icons/bi';
import { TbBread } from 'react-icons/tb';
import { IntigerNumberInput } from '../IntigerNumberInput/IntigerNumberInput';

export const NewDishForm = () => {
  const { dishData, setDishData, handleUpdateDishData } = useNewDishForm();

  const renderSoupOptions = useCallback(
    () => (
      <StyledInputWrapper>
        <label htmlFor="spiciness_scale">Spiciness (1-10):</label>
        <StyleddRangeInput
          type="range"
          id="spiciness_scale"
          name="spiciness_scale"
          min="1"
          max="10"
          value={dishData.spiciness_scale}
          onChange={handleUpdateDishData}
        />
        <div className="spiciness-display">{dishData.spiciness_scale}</div>
      </StyledInputWrapper>
    ),
    [dishData.spiciness_scale, handleUpdateDishData]
  );

  const renderPizzaOptions = useCallback(
    () => (
      <>
        <StyledInputWrapper>
          <label htmlFor="no_of_slices">Number of slices:</label>
          <IntigerNumberInput
            id="no_of_slices"
            name="no_of_slices"
            value={dishData.no_of_slices}
            onChange={handleUpdateDishData}
            setValue={value => setDishData(prevData => ({ ...prevData, no_of_slices: value }))}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <label htmlFor="diameter">Diameter:</label>
          <StyledInput
            type="number"
            step="0.1"
            id="diameter"
            name="diameter"
            value={dishData.diameter}
            onChange={handleUpdateDishData}
          />
        </StyledInputWrapper>
      </>
    ),
    [dishData.no_of_slices, dishData.diameter, handleUpdateDishData, setDishData]
  );

  const renderSandwichOptions = useCallback(
    () => (
      <>
        <StyledInputWrapper>
          <label htmlFor="slices_of_bread">Slices of bread:</label>
          <StyledInput
            type="number"
            id="slices_of_bread"
            name="slices_of_bread"
            value={dishData.slices_of_bread}
            onChange={handleUpdateDishData}
          />
        </StyledInputWrapper>
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
    <StyledForm onSubmit={e => e.preventDefault()}>
      <StyledInputWrapper>
        <label>Dish name:</label>
        <StyledInput type="text" name="name" onChange={handleUpdateDishData} />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label>Preparation time (hh:mm:ss):</label>
        <StyledInput
          name="preparation_time"
          value={dishData.preparation_time}
          onChange={handleUpdateDishData}
          type="time"
          step="1"
        ></StyledInput>
      </StyledInputWrapper>

      <StyledRadioInputWrapper>
        <span className="dish-type">Dish type:</span>
        <div className="inputs-wrapper">
          <div>
            <label>
              <input
                type="radio"
                name="type"
                value="pizza"
                checked={dishData.type === 'pizza'}
                onChange={handleUpdateDishData}
              />
              <div className="icon-wrapper">
                <FaPizzaSlice />
              </div>
              <span>Pizza</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="type"
                value="sandwich"
                checked={dishData.type === 'sandwich'}
                onChange={handleUpdateDishData}
              />
              <div className="icon-wrapper">
                <TbBread />
              </div>
              <span>Sandwich</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="type"
                value="soup"
                checked={dishData.type === 'soup'}
                onChange={handleUpdateDishData}
              />
              <div className="icon-wrapper">
                <BiBowlHot />
              </div>
              <span>Soup</span>
            </label>
          </div>
        </div>
      </StyledRadioInputWrapper>
      {renderDishOptions()}
      <input type="submit" value="Submit" />
    </StyledForm>
  );
};
