import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh);
  background: ${(props) => props.theme.colors.primary};
`;
