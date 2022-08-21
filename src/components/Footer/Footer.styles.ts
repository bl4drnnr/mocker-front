import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  background: ${(props) => props.theme.colors.primary};

  bottom: 0;
  position: absolute;
`;
