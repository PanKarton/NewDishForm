import styled from 'styled-components';

export const StyledWrapper = styled.div`
  svg {
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.text2XL};
  }
`;
