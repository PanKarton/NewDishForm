import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};

  .new-dish-button-wrapper {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: max-content;
  }

  .hero-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    @media screen and (min-width: 47rem) {
      left: auto;
      right: 0;
      width: auto;
      aspect-ratio: 1.5;
    }

    ::after {
      display: none;
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 50vw;
      background-color: ${({ theme }) => theme.color.primary};
      @media screen and (min-width: 47rem) {
        display: block;
        clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
      }
    }
  }
  .hero-text-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${({ theme }) => theme.color.primaryTransparent};
    translate: 0 -50%;
    padding: 2rem 1rem;
    width: 100%;
    @media screen and (min-width: 47rem) {
      background-color: transparent;
      width: 25rem;
      left: 7%;
    }
  }
`;

export const StyledHeroText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.text7XL};
  line-height: 0.9;
  letter-spacing: 1rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: center;
  @media screen and (min-width: 47rem) {
    font-size: ${({ theme }) => theme.fontSize.text8XL};
  }
`;
