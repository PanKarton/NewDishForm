import { ReactNode } from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
  children: ReactNode;
};

export const StyledWrapper = styled.div`
  position: fixed;
  top: 4rem;
  right: 0;
  background-color: ${({ theme }) => theme.color.error};
  color: ${({ theme }) => theme.color.adminPanel.primary};
  font-size: ${({ theme }) => theme.fontSize.textLG};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: min(18rem, 90%);
  translate: 110% 0;
  animation: slideInOut 5s ease-in-out both;

  p {
    font-size: ${({ theme }) => theme.fontSize.textBase};
    &.heading {
      font-size: ${({ theme }) => theme.fontSize.textLG};
      margin-bottom: 0.5rem;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.color.errorDarker};
    animation: shrink 4.5s linear forwards;
  }

  @keyframes slideInOut {
    0% {
      translate: 110% 0;
    }
    10% {
      translate: 0 0;
    }
    90% {
      translate: 0 0;
    }
    100% {
      translate: 110% 0;
    }
  }
  @keyframes shrink {
    from {
      scale: 1 1;
    }
    to {
      translate: -50%;
      scale: 0 1;
    }
  }
`;

export const ErrorMessage = ({ children }: ErrorMessageProps) => (
  <StyledWrapper>
    <p className="heading">Oops! Something went wrong. :(</p>
    <p>Error message: </p>
    <p>{children}</p>
  </StyledWrapper>
);
