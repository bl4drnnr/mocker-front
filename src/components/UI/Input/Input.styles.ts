import styled from 'styled-components';

export const BasicInput = styled.input`
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;

  padding: 12px;
  border-radius: 8px;
`;
