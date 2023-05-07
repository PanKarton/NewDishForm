import { NewDishForm } from '@/modules/admin-panel/NewDishForm/NewDishForm';
import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding-block: 3rem;
`;

export const NewDishFormSection = () => (
  <StyledSection>
    <NewDishForm />
  </StyledSection>
);
