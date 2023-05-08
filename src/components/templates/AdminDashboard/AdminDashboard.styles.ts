import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 17rem 1fr;
  grid-template-rows: 4rem 1fr;
  height: 100vh;
  width: 100vw;

  .content-wrapper {
    grid-area: 2/1/3/3;
    @media screen and (min-width: 53rem) {
      grid-area: 2/2/3/3;
    }
    overflow: scroll;
  }
`;
