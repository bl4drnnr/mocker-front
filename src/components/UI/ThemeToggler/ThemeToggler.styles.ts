import styled from 'styled-components';

export const Toggler = styled.div`
  width: 35px;
  height: 35px;

  border: 1px solid ${(props) => props.theme.colors.text};
  
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  transition: .5s;

  &:hover {
    background: ${(props) => props.theme.colors.hover};
  }
`;
