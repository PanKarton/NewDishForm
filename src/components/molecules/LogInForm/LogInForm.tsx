import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Field, Form, FormRenderProps } from 'react-final-form';
import { StyledCheckboxWrapper, StyledForm, StyledInput, StyledSubmit } from './LogInForm.styles';

type FormData = {
  email: string;
  password: string;
};

export const LogInForm = () => {
  const router = useRouter();

  const onSubmit = useCallback(() => {
    // Authentication logic and stuff
    router.push('/admin-panel');
  }, [router]);

  const validate = (values: FormData) => {
    const errors: Partial<FormData> = {};
    if (!values.email) {
      errors.email = 'Login is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting }: FormRenderProps<FormData>) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field name="email">
            {({ input, meta }) => (
              <div className="input-wrapper">
                <StyledInput placeholder="Login" type="text" {...input} />
                {meta.touched && meta.error && <span className="error-message">{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div className="input-wrapper">
                <StyledInput placeholder="Password" type="passwword" {...input} />
                {meta.touched && meta.error && <span className="error-message">{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="remember-me" type="checkbox">
            {({ input, meta }) => (
              <StyledCheckboxWrapper>
                <input {...input} id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </StyledCheckboxWrapper>
            )}
          </Field>
          <StyledSubmit type="submit" disabled={submitting}>
            LOGIN
          </StyledSubmit>
        </StyledForm>
      )}
    />
  );
};
