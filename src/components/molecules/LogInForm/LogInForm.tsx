import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding-block: 2rem;
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.contrastBorder};
  border-radius: 0.25rem;
  font-size: 0.875rem;
  padding: 0.75rem 0.75rem;
  font-weight: 500;
  width: 90%;
`;

export const StyledSubmit = styled.button`
  background-color: ${({ theme }) => theme.color.primaryAccent};
  border: 1px solid ${({ theme }) => theme.color.contrastBorder};
  color: ${({ theme }) => theme.color.primary};

  font-size: ${({ theme }) => theme.fontSize.textLG};
  font-weight: 500;
  border-radius: 0.25rem;
  padding: 0.75rem 0.75rem;
  width: 90%;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.secondaryAccentLighter};
  }
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 90%;
  height: 1.25rem;

  & > label {
    line-height: 1rem;

    &:checked {
    }
  }
`;

export const LogInForm = () => {
  const router = useRouter();
  const handleSubmit = useCallback(() => {
    router.push('/admin-panel');
  }, [router]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="text" name="login" placeholder="Login" />
      <StyledInput type="text" name="password" placeholder="Password" />
      <StyledCheckboxWrapper>
        <input id="rememberMe" name="rememberMe" type="checkbox" />
        <label htmlFor="rememberMe">Remember me</label>
      </StyledCheckboxWrapper>
      <StyledSubmit>LOGIN</StyledSubmit>
    </StyledForm>
  );
};
