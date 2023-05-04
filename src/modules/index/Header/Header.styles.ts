import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};

  .new-dish-button-wrapper {
    position: absolute;
    top: 2rem;
    right: 4rem;
    width: max-content;
  }

  .hero-image-wrapper {
    position: relative;
    height: 100%;
    aspect-ratio: 1.5;
    margin-left: auto;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
  }
  .hero-text-wrapper {
    position: absolute;
    top: 45%;
    left: 7%;
    translate: 0 -50%;
    width: 25rem;
  }
`;

export const StyledHeroText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.text8XL};
  line-height: 0.9;
  letter-spacing: 1rem;
  font-weight: 500;
`;
