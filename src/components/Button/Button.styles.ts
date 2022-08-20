import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 1px solid ${(props) => props.theme.colors.text};
  
  padding: 8px;
  margin: 0 5px;
  border-radius: 8px;

  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
