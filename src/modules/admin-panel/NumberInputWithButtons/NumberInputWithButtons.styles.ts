import styled from 'styled-components';
export const StyledWrapper = styled.div`
  display: flex;
  height: 2.75rem;
  border-radius: 100rem;
  overflow: hidden;

  svg {
    font-size: ${({ theme }) => theme.fontSize.text2XL};
  }

  &:has(input:focus) {
    outline: 2px solid ${({ theme }) => theme.color.adminPanel.secondaryAccent};
  }
`;
export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.adminPanel.secondaryAccent};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  color: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.textXL};
  border: none;
`;

export const StyledInput = styled.input`
  border: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.text2XL};
  border-block: 1px solid ${({ theme }) => theme.color.adminPanel.secondaryAccent};
  &:focus {
    border: none;
    outline: none;
  }
`;
