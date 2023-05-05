import Image from 'next/image';
import { CustomLink } from '@/components/atoms/CustomLink/CustomLink';
import { StyledHeader, StyledHeroText } from './Header.styles';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="hero-image-wrapper">
        <Image alt="woman putting pizza into stone oven" src="/main-page-hero.jpg" fill />
      </div>
      <div className="hero-text-wrapper">
        <StyledHeroText>Soup &#38; Slice</StyledHeroText>
      </div>
      <div className="new-dish-button-wrapper">
        <CustomLink href="admin-login">Admin panel</CustomLink>
      </div>
    </StyledHeader>
  );
};
