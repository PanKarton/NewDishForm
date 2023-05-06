import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  /* background-color: ${({ theme }) => theme.color.primaryAccent}; */
  border-bottom: 1px solid ${({ theme }) => theme.color.borderDivider};
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
`;

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.text2XL};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;

  button {
    background-color: transparent;
    border: none;
    display: flex;

    &:hover > svg {
      cursor: pointer;
      color: ${({ theme }) => theme.color.adminPanel.contrastLighter};
    }
  }

  svg {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.color.adminPanel.contrast};
  }
`;

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
