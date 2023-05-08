import { render, fireEvent, waitFor, screen } from '../../../../testHelpers/test-utils';
import mockRouter from 'next-router-mock';
import '@testing-library/jest-dom';
import { NewDishForm } from './NewDishForm';

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
    const { getByLabelText, getByText } = render(<NewDishForm />);
    const nameInput = getByLabelText('Dish name:');
    const preparationTimeInput = getByLabelText('Preparation time (hh:mm:ss):');
    const pizzaRadioInput = getByLabelText('Pizza');
    const submitButton = getByText('LOGIN');

    fireEvent.change(emailInput, { target: { value: 'test name' } });
    fireEvent.change(passwordInput, { target: { value: '11:05:12' } });
    fireEvent.click(rememberMeCheckbox);
    fireEvent.click(submitButton);

    expect(mockRouter).toMatchObject({
      pathname: '/admin-panel',
    });
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
const getNoOfSlicesOfBreadInput = () => screen.getByLabelText('Diameter (cm):');
const getSpicinessInput = () => screen.getByLabelText('Spiciness (1-10):');
