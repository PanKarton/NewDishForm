import { NewDishForm } from '@/modules/admin-panel/NewDishForm/NewDishForm';
import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  height: 100%;
`;

export const NewDishFormSection = () => (
  <StyledSection>
    <NewDishForm />
  </StyledSection>
);
