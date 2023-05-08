import { BackLinkArrow } from '@/components/atoms/BackLinkArrow/BackLinkArrow';
import { LogInForm } from '@/components/molecules/LogInForm/LogInForm';
import Link from 'next/link';
import { StyledHeading, StyledLinkWrapper, StyledSection } from './LogInPageSection.styles';

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
      <div className="previous-page-link-wrapper">
        <BackLinkArrow href="/" />
      </div>
    </StyledSection>
  </>
);
