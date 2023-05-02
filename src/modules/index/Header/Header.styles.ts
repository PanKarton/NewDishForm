import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};

  .new-dish-button-wrapper {
    position: absolute;
    top: 2rem;
    right: 4rem;
  }

  .hero-image-wrapper {
    position: relative;
    height: 100%;
    aspect-ratio: 1.5;
    margin-left: auto;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
  }
`;
