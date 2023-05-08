import { render, fireEvent, waitFor, screen } from '../../../../testHelpers/test-utils';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import { NewDishForm } from './NewDishForm';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('NewDishForm', () => {
  test('renders login form', () => {
    render(<NewDishForm />);
    expect(getDishNameInput()).toBeInTheDocument();
    expect(getPreparationTimeInput()).toBeInTheDocument();
    expect(getRadioInput('Pizza')).toBeInTheDocument();
    expect(getRadioInput('Sandwich')).toBeInTheDocument();
    expect(getRadioInput('Soup')).toBeInTheDocument();
    // Test if optional inputs are getting dispalyed
    // Pizza
    fireEvent.click(getRadioInput('Pizza'));
    expect(getNumberOfSlicesInput()).toBeInTheDocument();
    expect(getDiameterInput()).toBeInTheDocument();
    // Sandwich
    fireEvent.click(getRadioInput('Sandwich'));
    expect(getNoOfSlicesOfBreadInput()).toBeInTheDocument();
    // Soup
    fireEvent.click(getRadioInput('Soup'));
    expect(getSpicinessInput()).toBeInTheDocument();
    // Find submit button
    expect(getSubmitButton()).toBeInTheDocument();
  });

  test('submits form with valid pizza data', async () => {
    render(<NewDishForm />);

    const pizzaData = {
      name: 'test name',
      preparation_time: '11:05:12',
      type: 'pizza',
      no_of_slices: 12,
      diameter: 10.5,
    };
    fireEvent.change(getDishNameInput(), { target: { value: pizzaData.name } });
    fireEvent.change(getPreparationTimeInput(), { target: { value: pizzaData.preparation_time } });
    fireEvent.click(getRadioInput('Pizza'));
    await waitFor(() => {
      fireEvent.change(getNumberOfSlicesInput(), { target: { value: pizzaData.no_of_slices } });
      fireEvent.change(getDiameterInput(), { target: { value: pizzaData.diameter } });
      fireEvent.click(getSubmitButton());
    });
    await waitFor(() => expect(fetchMock).toBeCalledTimes(1));

    const body = JSON.stringify(pizzaData);

    console.log('JSON test', body);

    expect(fetchMock).toHaveBeenCalledWith(
      'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      }
    );

    expect(await screen.findByText('asdaagag!')).toBeInTheDocument();
  });

  //   test('shows validation errors for empty fields', async () => {
  //     render(<LogInForm />);
  //     const submitButton = screen.getByText('LOGIN');

  //     fireEvent.click(submitButton);

  //     expect(await screen.findByText('Login is required')).toBeInTheDocument();
  //     expect(await screen.findByText('Password is required')).toBeInTheDocument();
  //   });
});

const getDishNameInput = () => screen.getByLabelText('Dish name:');
const getPreparationTimeInput = () => screen.getByLabelText('Preparation time (hh:mm:ss):');
const getRadioInput = (label: string) => screen.getByLabelText(label);
const getSubmitButton = () => screen.getByText('Add new dish!');
const getNumberOfSlicesInput = () => screen.getByLabelText('Number of slices:');
const getDiameterInput = () => screen.getByLabelText('Diameter (cm):');
const getNoOfSlicesOfBreadInput = () => screen.getByLabelText('Number of slices of bread:');
const getSpicinessInput = () => screen.getByLabelText('Spiciness (1-10):');
