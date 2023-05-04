import { LogInForm } from '@/components/molecules/LogInForm/LogInForm';
import React from 'react';
import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: min(90%, 20rem);
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.color.primary};
    padding-block: 3rem;
  }
`;

export const StyledHeading = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
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
