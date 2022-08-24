import styled from 'styled-components';

export const Toggler = styled.div`
  width: 35px;
  height: 35px;
  
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.hover};
  }

  @media screen and (max-width: 1000px) {
    &:hover {
      background: none;
    }
  }
`;
