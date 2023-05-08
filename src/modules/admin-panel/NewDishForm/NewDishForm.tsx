import { useCallback } from 'react';
import { StyledForm, StyledRadioInputWrapper, StyledSubmit } from './NewDishForm.styles';
import { DishData, useNewDishForm } from './useNewDishForm';
import { FaPizzaSlice } from 'react-icons/fa';
import { BiBowlHot } from 'react-icons/bi';
import { TbBread } from 'react-icons/tb';
import { Form, FormRenderProps, FormSpy } from 'react-final-form';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { NewDishFormInput } from '../NewDishFormInput/NewDishFormInput';
import { NewDishFormRadioInput } from '../NewDishFormRadioInput/NewDishFormRadioInput';
import { NewDishFormRangeInput } from '../NewDishFormRangeInput/NewDishFormRangeInput';

export const NewDishForm = () => {
  const { submitError, submitSuccessMessage, handleValidate, onSubmit } = useNewDishForm();

  const renderSoupOptions = useCallback(
    (spiciness: string | undefined) => (
      <NewDishFormRangeInput label="Spiciness (1-10):" spiciness={spiciness} />
    ),
    []
  );

  const renderPizzaOptions = useCallback(
    () => (
      <>
        <NewDishFormInput name="no_of_slices" type="number" step="1" label="Number of slices:" />
        <NewDishFormInput name="diameter" type="number" step="0.1" label="Diameter (cm):" />
      </>
    ),
    []
  );

  const renderSandwichOptions = useCallback(
    () => (
      <>
        <NewDishFormInput
          name="slices_of_bread"
          type="number"
          step="1"
          label="Number of slices of bread:"
        />
      </>
    ),
    []
  );

  const renderDishOptions = useCallback(
    (values: Partial<DishData>) => {
      if (values.type === '') return null;
      if (values.type === 'soup') return renderSoupOptions(values.spiciness_scale);
      if (values.type === 'pizza') return renderPizzaOptions();
      if (values.type === 'sandwich') return renderSandwichOptions();
    },
    [renderSoupOptions, renderPizzaOptions, renderSandwichOptions]
  );

  return (
    <Form
      onSubmit={onSubmit}
      validate={handleValidate}
      render={({ handleSubmit, submitting, values }: FormRenderProps<DishData>) => (
        <StyledForm onSubmit={handleSubmit}>
          <NewDishFormInput name="name" label="Dish name:" type="text" />
          <NewDishFormInput
            label="Preparation time (hh:mm:ss):"
            name="preparation_time"
            type="time"
            step="1"
          />
          <StyledRadioInputWrapper>
            <span className="dish-type">Dish type:</span>
            <div className="inputs-wrapper">
              <NewDishFormRadioInput
                dishType={values.type}
                name="type"
                dishName="Pizza"
                value="pizza"
              >
                <FaPizzaSlice />
              </NewDishFormRadioInput>
              <NewDishFormRadioInput
                dishType={values.type}
                name="type"
                dishName="Sandwich"
                value="sandwich"
              >
                <TbBread />
              </NewDishFormRadioInput>
              <NewDishFormRadioInput
                dishType={values.type}
                name="type"
                dishName="Soup"
                value="soup"
              >
                <BiBowlHot />
              </NewDishFormRadioInput>
            </div>
          </StyledRadioInputWrapper>
          {renderDishOptions(values)}
          <StyledSubmit type="submit" disabled={submitting}>
            <FormSpy>
              {({ submitting }) => {
                // If submit successful, display success message
                if (submitSuccessMessage) return <span>{submitSuccessMessage}</span>;
                // Display loading spinner or default submit message
                return submitting ? <LoadingSpinner /> : <p>Add new dish!</p>;
              }}
            </FormSpy>
          </StyledSubmit>
          {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
        </StyledForm>
      )}
    />
  );
};
