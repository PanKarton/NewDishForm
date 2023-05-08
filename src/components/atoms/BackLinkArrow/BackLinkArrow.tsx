import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { StyledWrapper } from './BackLinkArrow.styles';

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
