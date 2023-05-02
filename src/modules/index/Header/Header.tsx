import Image from 'next/image';
import { CustomLink } from '@/components/atoms/CustomLink/CustomLink';
import { StyledHeader } from './Header.styles';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="new-dish-button-wrapper">
        <CustomLink href="add-new-dish">Add new dish!</CustomLink>
      </div>
      <div className="hero-image-wrapper">
        <Image alt="woman putting pizza into stone oven" src="/main-page-hero.jpg" fill />
      </div>
    </StyledHeader>
  );
};
