import { HamburgerButton } from '@/components/atoms/HamburgerButton/HamburgerButton';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { StyledHeader, StyledHeading, UserInfoWrapper } from './Header.styles';

type HeadingProps = {
  isNavVisible: boolean;
  heading: string;
  toggleNav: () => void;
};

export const Header = ({ isNavVisible, heading, toggleNav }: HeadingProps) => {
  const router = useRouter();

  const handleLogOut = useCallback(() => {
    // Space for logout logic and stuff

    router.push('/admin-login');
  }, [router]);

  return (
    <StyledHeader>
      <div className="hamburger-wrapper">
        <HamburgerButton isActive={isNavVisible} onClick={toggleNav} />
      </div>
      <StyledHeading>{heading}</StyledHeading>
      <UserInfoWrapper>
        <p>John Kowalski</p>
        <button onClick={handleLogOut}>
          <FiLogOut />
        </button>
      </UserInfoWrapper>
    </StyledHeader>
  );
};
