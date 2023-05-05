import { LogInForm } from '@/components/molecules/LogInForm/LogInForm';
import React from 'react';
import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondaryAccent};

  .wrapper {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: min(90%, 20rem);
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.color.primary};
    overflow: hidden;
  }
`;

export const StyledHeading = styled.h1`
  text-align: center;
  background-color: ${({ theme }) => theme.color.primaryAccent};
  height: 6rem;
  line-height: 6rem;
  color: ${({ theme }) => theme.color.primary};
`;

export const LogInPageSection = () => (
  <>
    <StyledSection>
      <div className="wrapper">
        <StyledHeading>LOGIN</StyledHeading>
        <LogInForm />
      </div>
    </StyledSection>
  </>
);
