import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  svg {
    color: ${({ theme }) => theme.color.primary};
    font-size: 2rem;
  }
`;

type BackLinkArrowProps = {
  href: string;
};

export const BackLinkArrow = ({ href }: BackLinkArrowProps) => (
  <StyledWrapper>
    <Link href={href}>
      <FiArrowLeft />
    </Link>
  </StyledWrapper>
);
