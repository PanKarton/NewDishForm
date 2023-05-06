import { render, fireEvent, waitFor, screen } from '../../../../testHelpers/test-utils';
import { LogInForm } from './LogInForm';
import mockRouter from 'next-router-mock';
import '@testing-library/jest-dom';

jest.mock('next/router', () => require('next-router-mock'));

describe('LogInForm', () => {
  test('renders login form', () => {
    render(<LogInForm />);
    expect(screen.getByPlaceholderText('Login')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Remember me')).toBeInTheDocument();
    expect(screen.getByText('LOGIN')).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    const { getByPlaceholderText, getByText } = render(<LogInForm />);
    const emailInput = getByPlaceholderText('Login');
    const passwordInput = getByPlaceholderText('Password');
    const rememberMeCheckbox = getByText('Remember me');
    const submitButton = getByText('LOGIN');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(rememberMeCheckbox);
    fireEvent.click(submitButton);

    expect(mockRouter).toMatchObject({
      pathname: '/admin-panel',
    });
  });

  test('shows validation errors for empty fields', async () => {
    render(<LogInForm />);
    const submitButton = screen.getByText('LOGIN');

    fireEvent.click(submitButton);

    expect(await screen.findByText('Login is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });
});
