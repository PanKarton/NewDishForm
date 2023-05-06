import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { StyledHeader, StyledHeading, UserInfoWrapper } from './Header.styles';

type HeadingProps = {
  heading: string;
};

export const Header = ({ heading }: HeadingProps) => {
  const router = useRouter();

  const handleLogOut = useCallback(() => {
    // Space for logout logic and stuff

    router.push('/admin-login');
  }, [router]);

  return (
    <StyledHeader>
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
