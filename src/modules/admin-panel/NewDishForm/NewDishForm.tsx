import { useCallback } from 'react';
import {
  StyleddRangeInput,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledRadioInputWrapper,
  StyledSubmit,
} from './NewDishForm.styles';
import { DishData, useNewDishForm } from './useNewDishForm';
import { FaPizzaSlice } from 'react-icons/fa';
import { BiBowlHot } from 'react-icons/bi';
import { TbBread } from 'react-icons/tb';
import { NumberInputWithButtons } from '../NumberInput/NumberInput';
import { Field, Form, FormRenderProps, FormSpy } from 'react-final-form';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const NewDishForm = () => {
  const { submitError, handleValidate, onSubmit } = useNewDishForm();

  const renderSoupOptions = useCallback(
    (spiciness: string | undefined) => (
      <Field name="spiciness_scale">
        {({ input, meta }) => (
          <StyledInputWrapper>
            <label htmlFor="spiciness_scale">Spiciness (1-10):</label>
            <StyleddRangeInput
              type="range"
              {...input}
              min="1"
              max="10"
              onChange={event => {
                input.onChange(event);
              }}
            />
            <div className="spiciness-display">{spiciness}</div>
            {meta.error && meta.touched && <span className="error-message">{meta.error}</span>}
          </StyledInputWrapper>
        )}
      </Field>
    ),
    []
  );

  const renderPizzaOptions = useCallback(
    () => (
      <>
        <Field name="no_of_slices">
          {({ input, meta }) => (
            <StyledInputWrapper>
              <label htmlFor="no_of_slices">Number of slices:</label>
              <StyledInput {...input} id="no_of_slices" onChange={event => input.onChange(event)} />
              {meta.error && meta.touched && <span className="error-message">{meta.error}</span>}
            </StyledInputWrapper>
          )}
        </Field>
        <Field name="diameter">
          {({ input, meta }) => (
            <StyledInputWrapper>
              <label htmlFor="diameter">Diameter (cm):</label>
              <NumberInputWithButtons
                {...input}
                id="diameter"
                onChange={event => input.onChange(event)}
              />
              {meta.error && meta.touched && <span className="error-message">{meta.error}</span>}
            </StyledInputWrapper>
          )}
        </Field>
      </>
    ),
    []
  );

  const renderSandwichOptions = useCallback(
    () => (
      <>
        <Field name="slices_of_bread">
          {({ input, meta }) => (
            <StyledInputWrapper>
              <label htmlFor="slices_of_bread">Slices of bread:</label>
              <NumberInputWithButtons
                {...input}
                id="slices_of_bread"
                onChange={event => input.onChange(event)}
              />
              {meta.error && meta.touched && <span className="error-message">{meta.error}</span>}
            </StyledInputWrapper>
          )}
        </Field>
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
          <Field name="name">
            {({ input, meta }) => (
              <StyledInputWrapper>
                <label>Dish name:</label>
                <StyledInput
                  {...input}
                  type="text"
                  onChange={event => {
                    input.onChange(event);
                  }}
                />
                {meta.error && meta.touched && <span className="error-message">{meta.error}</span>}
              </StyledInputWrapper>
            )}
          </Field>
          <Field name="preparation_time">
            {({ input, meta }) => (
              <StyledInputWrapper>
                <label>Preparation time (hh:mm:ss):</label>
                <StyledInput
                  {...input}
                  onChange={event => {
                    input.onChange(event);
                  }}
                  type="time"
                  step="1"
                ></StyledInput>
                {meta.error && meta.touched && <span className="error-message">{meta.error}</span>}
              </StyledInputWrapper>
            )}
          </Field>
          <StyledRadioInputWrapper>
            <span className="dish-type">Dish type:</span>
            <div className="inputs-wrapper">
              <Field name="type" type="radio">
                {({ input }) => (
                  <div>
                    <label>
                      <input
                        {...input}
                        value="pizza"
                        checked={values.type === 'pizza'}
                        onChange={event => {
                          input.onChange(event);
                        }}
                      />
                      <div className="icon-wrapper">
                        <FaPizzaSlice />
                      </div>
                      <span>Pizza</span>
                    </label>
                  </div>
                )}
              </Field>
              <Field name="type" type="radio">
                {({ input, meta }) => (
                  <div>
                    <label>
                      <input
                        {...input}
                        value="sandwich"
                        checked={values.type === 'sandwich'}
                        onChange={event => {
                          input.onChange(event);
                        }}
                      />
                      <div className="icon-wrapper">
                        <TbBread />
                      </div>
                      <span>Sandwich</span>
                    </label>
                    {meta.error && meta.touched && (
                      <span className="error-message">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="type" type="radio">
                {({ input }) => (
                  <div>
                    <label>
                      <input
                        {...input}
                        value="soup"
                        checked={values.type === 'soup'}
                        onChange={event => {
                          input.onChange(event);
                        }}
                      />
                      <div className="icon-wrapper">
                        <BiBowlHot />
                      </div>
                      <span>Soup</span>
                    </label>
                  </div>
                )}
              </Field>
            </div>
          </StyledRadioInputWrapper>
          {renderDishOptions(values)}
          <StyledSubmit type="submit" disabled={submitting}>
            <FormSpy>
              {({ submitting }) => (submitting ? <LoadingSpinner /> : <p>Add new dish!</p>)}
            </FormSpy>
          </StyledSubmit>
          {true && <ErrorMessage>{submitError}</ErrorMessage>}
        </StyledForm>
      )}
    />
  );
};
