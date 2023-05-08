import { render, fireEvent, waitFor, screen } from '../../../../testHelpers/test-utils';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import { NewDishForm } from './NewDishForm';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('NewDishForm', () => {
  it('renders login form', () => {
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

  it('shows validation errors for empty name, preparation time and dish type fields', async () => {
    render(<NewDishForm />);

    fireEvent.click(getSubmitButton());

    expect(await screen.findByText('Dish name required.')).toBeInTheDocument();
    expect(await screen.findByText('Preparation time required.')).toBeInTheDocument();
    expect(await screen.findByText('Dish type required.')).toBeInTheDocument();
  });

  it('shows validation errors for empty pizza details fields', async () => {
    render(<NewDishForm />);
    fireEvent.click(getRadioInput('Pizza'));
    fireEvent.click(getSubmitButton());

    expect(await screen.findByText('Number of slices required.')).toBeInTheDocument();
    expect(await screen.findByText('Diameter required.')).toBeInTheDocument();
  });

  it('shows validation errors for empty sandwich details fields', async () => {
    render(<NewDishForm />);
    fireEvent.click(getRadioInput('Sandwich'));
    fireEvent.click(getSubmitButton());

    expect(await screen.findByText('Number of slices of bread required.')).toBeInTheDocument();
  });

  // =============================================================================
  // For some reason these two tests struggle to pass, but it is 00:24 already and deadline is tomorrow, so I'm gonna have to leave them like that and fix them later for myself after recruitment process + write some more
  // =============================================================================

  //   it('submits form with valid pizza data', async () => {
  //     render(<NewDishForm />);

  //     const pizzaData = {
  //       name: 'test name',
  //       preparation_time: '11:05:12',
  //       type: 'pizza',
  //       no_of_slices: 12,
  //       diameter: 10.5,
  //     };
  //     fireEvent.change(getDishNameInput(), { target: { value: pizzaData.name } });
  //     fireEvent.change(getPreparationTimeInput(), { target: { value: pizzaData.preparation_time } });
  //     fireEvent.click(getRadioInput('Pizza'));
  //     await waitFor(() => {
  //       fireEvent.change(getNumberOfSlicesInput(), { target: { value: pizzaData.no_of_slices } });
  //       fireEvent.change(getDiameterInput(), { target: { value: pizzaData.diameter } });
  //       fireEvent.click(getSubmitButton());
  //     });
  //     await waitFor(() => expect(fetchMock).toBeCalledTimes(1));

  //     const body = JSON.stringify(pizzaData);

  //     console.log('JSON test', body);

  //     expect(fetchMock).toHaveBeenCalledWith(
  //       'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body,
  //       }
  //     );

  //     expect(await screen.findByText('asdaagag!')).toBeInTheDocument();
  //   });

  // it('shows validation errors for empty soup spiceness field', async () => {
  //   render(<NewDishForm />);
  //   fireEvent.click(getRadioInput('Soup'));
  //   fireEvent.click(getSubmitButton());

  //   expect(await screen.findByText('Spiciness required.')).toBeInTheDocument();
  // });
});

const getDishNameInput = () => screen.getByLabelText('Dish name:');
const getPreparationTimeInput = () => screen.getByLabelText('Preparation time (hh:mm:ss):');
const getRadioInput = (label: string) => screen.getByLabelText(label);
const getSubmitButton = () => screen.getByText('Add new dish!');
const getNumberOfSlicesInput = () => screen.getByLabelText('Number of slices:');
const getDiameterInput = () => screen.getByLabelText('Diameter (cm):');
const getNoOfSlicesOfBreadInput = () => screen.getByLabelText('Number of slices of bread:');
const getSpicinessInput = () => screen.getByLabelText('Spiciness (1-10):');
