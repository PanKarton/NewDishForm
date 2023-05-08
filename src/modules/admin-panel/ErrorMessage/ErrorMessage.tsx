import { ReactNode } from 'react';
import { StyledWrapper } from './ErrorMessage.styles';

type ErrorMessageProps = {
  children: ReactNode;
};

export const ErrorMessage = ({ children }: ErrorMessageProps) => (
  <StyledWrapper>
    <p className="heading">Oops! Something went wrong. :(</p>
    <p>Error message: </p>
    <p>{children}</p>
  </StyledWrapper>
);
