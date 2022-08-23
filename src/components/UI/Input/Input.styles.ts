import styled from 'styled-components';

export const BasicInput = styled.input`
  background-color: rgba(30, 41, 59, .85);
  border: none;
  color: rgba(238, 238, 238, .85);
  font-size: 16px;

  padding: 12px;
  border-radius: 8px;
  
  &.searchBar {
    padding-left: 40px;
    cursor: pointer;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
  
  ::placeholder {
    color: rgba(238, 238, 238, .85);
  }
`;
