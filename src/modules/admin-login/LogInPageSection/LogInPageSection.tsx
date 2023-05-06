import { LogInForm } from '@/components/molecules/LogInForm/LogInForm';
import Link from 'next/link';
import styled from 'styled-components';
import { StyledHeading, StyledSection } from './LogInPageSection.styles';

export const StyledLinkWrapper = styled.div`
  padding-left: 1rem;
  padding-block: 0.25rem 1rem;
  a {
    color: ${({ theme }) => theme.color.primaryAccent};
    font-size: ${({ theme }) => theme.fontSize.textSM};
    &:hover {
      color: ${({ theme }) => theme.color.primaryAccentLighter};
    }
  }
`;

export const LogInPageSection = () => (
  <>
    <StyledSection>
      <div className="wrapper">
        <StyledHeading>Admin login form</StyledHeading>
        <LogInForm />
        <StyledLinkWrapper>
          <Link href="password-recovery">Forgot password?</Link>
        </StyledLinkWrapper>
      </div>
    </StyledSection>
  </>
);
